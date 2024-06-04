import {Platform, SafeAreaView, ScrollView, StyleSheet, View, StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import TrueSignal from "./components/Backend/TrueSignal";
import FalseSignal from "./components/Backend/FalseSignal";
import Heading from "./components/heading";

export default function App() {
  const [stateBackend, setStateBackend] = useState({door: "unknown", food: {Kg: "unknown", fullKg: "unknown"}, water: {level: "unknown", turbidity: "unknown"}});
  const [socket, setSocket] = useState(null);

  function initializeWebSocket() {
    try {
      const newSocket  = new WebSocket('wss://express-iot.onrender.com/app'); //wss://express-iot.onrender.com/app or ws://192.168.1.17:8080/app

      newSocket.onopen = () => {
        console.log('Opening App');
      }

      newSocket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        console.log(message.message);
        setStateBackend(message.message);
      };

      newSocket.onerror = (error) => {
        console.log('WebSocket error:', error);
        initializeWebSocket();
      };

      // Закрытие WebSocket подключения
      newSocket.onclose = (event) => {
        console.log('WebSocket connection closed:', event);
      };

      setSocket(newSocket);
    }
    catch (error) {
      setSocket(null);
    }
  }

  useEffect(() => {
    initializeWebSocket();

    return () => {
      if (socket)
      {
        socket.close();
      }
    };
  }, []);


  function sendDoor(status) {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({message: {door: status}}));
    }
  }

  return (
      <SafeAreaView style={styles.container}>
        <Heading/>
        <ScrollView style={styles.scrollView}>
          <View style={styles.view}>
            {socket ? <TrueSignal handleSubmit={sendDoor} stateBackend={stateBackend}/> : <FalseSignal onPress={() => initializeWebSocket()} />}
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e8e8e8',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: StatusBar.currentHeight
  },
  scrollView: {
    width: '100%',
  },
  view: {
    width: '100%',
    padding: 16,
  }
});