import {StyleSheet, View, Text, Pressable, Switch} from "react-native";
import Column from "../../Column";
import Turbidity from "../../../icon/turbidity";
import colorStatus from "../../../const/colorStatus";
import Food from "../../../icon/food";
import Hidden from "../../Hidden";
import WaterLevel from "../../../icon/water";
import Row from "../../Row";
import Door from "../../../icon/door";
import {useEffect, useState} from "react";
import {LinearGradient} from "expo-linear-gradient";


export default function TrueSignal({handleSubmit, stateBackend}) {
    const [statusTurbidity, setStatusTurbidity] = useState("grey");
    const [statusFood, setStatusFood] = useState("grey");
    const [statusLevel, setStatusLevel] = useState("grey");
    const [statusDoor, setStatusDoor] = useState("grey");
    const [statusButton, setStatusButton] = useState("unknown");
    const toggleSwitch = () => setStatusButton(typeof(statusButton) === 'boolean' ? (statusButton => !statusButton) : 'unknown');

    useEffect(() => {
        if (statusButton === true && statusDoor === "red")
        {
            setStatusDoor("blue");
            handleSubmit(true);
        }
        else if (statusButton === false && statusDoor === "blue") {
            setStatusDoor("red");
            handleSubmit(false);
        }
    }, [statusButton])

    useEffect(() => {
        if (stateBackend.water.turbidity < 26) {
            setStatusTurbidity("blue");
        }
        else if (stateBackend.water.turbidity < 51) {
            setStatusTurbidity("green");
        }
        else if (stateBackend.water.turbidity < 76) {
            setStatusTurbidity("yellow");
        }
        else if (stateBackend.water.turbidity <= 100) {
            setStatusTurbidity("red");
        }
        else if (stateBackend.water.turbidity === "error") {
            setStatusTurbidity("orange");
        }
        else
        {
            setStatusTurbidity("grey");
        }

        if (stateBackend.food.Kg < (stateBackend.food.fullKg / 100 * 26)) {
            setStatusFood("red");
        }
        else if (stateBackend.food.Kg < (stateBackend.food.fullKg / 100 * 51)) {
            setStatusFood("yellow");
        }
        else if (stateBackend.food.Kg < (stateBackend.food.fullKg / 100 * 76)) {
            setStatusFood("green");
        }
        else if (stateBackend.food.Kg <= stateBackend.food.fullKg) {
            setStatusFood("blue");
        }
        else if (stateBackend.food.Kg === "error" || stateBackend.food.fullKg === "error") {
            setStatusFood("orange");
        }
        else
        {
            setStatusFood("grey");
        }

        if (stateBackend.water.level === true) {
            setStatusLevel("blue");
        }
        else if (stateBackend.water.level === false) {
            setStatusLevel("red");
        }
        else if (stateBackend.water.level === "error") {
            setStatusLevel("orange");
        }
        else
        {
            setStatusLevel("grey");
        }

        if (stateBackend.door === true) {
            setStatusDoor("blue");
            setStatusButton(true);
        }
        else if (stateBackend.door === false) {
            setStatusDoor("red");
            setStatusButton(false);
        }
        else if (stateBackend.door === "error") {
            setStatusDoor("orange");
            setStatusButton("error");
        }
        else
        {
            setStatusDoor("grey");
            setStatusButton("unknown");
        }
    }, [stateBackend]);

    return <View style={style.viewColumn}>
        <Text style={style.heading}>Устройство</Text>
        <LinearGradient style={style.linearBlock} colors={[colorStatus['blue'].tintColor, colorStatus['green'].tintColor]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
            <Text style={[style.textDevice, {color: '#fff'}]}>
                {stateBackend.device && stateBackend.device.title}
            </Text>
            <Text style={[style.headingDevice, {color: '#fff'}]}>
                {stateBackend.device && ("Питомец: " + stateBackend.device.pet)}
            </Text>
            <Text style={[style.textDevice, {color: '#fff'}]}>
                {stateBackend.device && ("Время обновления: " + stateBackend.device.date + " " + stateBackend.device.time)}
            </Text>
        </LinearGradient>
        <Text style={style.heading}>Датчики</Text>
        <View style={style.viewRow}>
            <Column>
                <Turbidity status={statusTurbidity}/>
                <Text style={[style.text, {color: colorStatus[statusTurbidity].tintColor}]}>Мутность воды</Text>
                <Text style={[style.text, {color: colorStatus[statusTurbidity].tintColor}]}>{"Статус: " + (stateBackend.water.turbidity === "error" ? "Ошибка датчика" : (stateBackend.water.turbidity === "unknown" ? "Нет данных" : (stateBackend.water.turbidity + " %")))}</Text>
            </Column>
            <Column>
                <Food status={statusFood}/>
                <Text style={[style.text, {color: colorStatus[statusFood].tintColor}]}>Кол. корма</Text>
                <Text style={[style.text, , {color: colorStatus[statusFood].tintColor}]}>{"Статус: " + ((stateBackend.food.Kg === "error" || stateBackend.food.fullKg === "error") ? "Ошибка датчика" : ((stateBackend.food.Kg === "unknown" || stateBackend.food.fullKg === "unknown") ? "Нет данных" : (stateBackend.food.Kg + " кг. из " + stateBackend.food.fullKg + " кг.")))}</Text>
            </Column>
        </View>
        <View style={style.viewRow}>
            <Column>
                <WaterLevel status={statusLevel}/>
                <Text style={[style.text, {color: colorStatus[statusLevel].tintColor}]}>Уровень воды</Text>
                <Text style={[style.text, {color: colorStatus[statusLevel].tintColor}]}>{"Статус: " + (stateBackend.water.level === "error" ? "Ошибка датчика" : (stateBackend.water.level === "unknown" ? "Нет данных" : (stateBackend.water.level ? "Достаточно" : "Ниже уровня")))}</Text>
            </Column>
            <Hidden/>
        </View>
        <Text style={style.heading}>Механизмы</Text>
        <View style={style.viewRow}>
            <Column>
                <Door status={statusDoor}/>
                <Text style={[style.text, {color: colorStatus[statusDoor].tintColor}]}>Пищевая крышка</Text>
                <Text style={[style.text, {color: colorStatus[statusDoor].tintColor}]}>{"Статус: " + (statusButton === "error" ? "Ошибка устройства" : (statusButton === "unknown" ? "Нет данных" : (statusButton ? "Открыта" : "Закрыта")))}</Text>
                <Switch
                    trackColor={{false: colorStatus[statusDoor].backgroundColor, true: colorStatus[statusDoor].backgroundColor}}
                    thumbColor={colorStatus[statusDoor].tintColor}
                    onValueChange={toggleSwitch}
                    value={typeof(statusButton) === "boolean" ? statusButton : false}
                    disabled={(statusButton === "error" || statusButton === "unknown")}
                />
            </Column>
            <Hidden/>
        </View>
    </View>
}

const style = StyleSheet.create({
    viewColumn: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 16,
    },
    viewRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 16,
    },
    text: {
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 19,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    button: {
        marginVertical: 6,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderRadius: 12
    },
    linearBlock: {
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 16,
        borderRadius: 12,
        padding: 16,
    },
    headingDevice: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 30,
    },
    textDevice: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 19,
    }
});