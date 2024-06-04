import {StyleSheet, Text, View} from "react-native";

export default function Block({heading, children1, children2}) {
    return (
        <View style={style.container}>
            <Text style={style.heading}>{heading}</Text>
            <View style={style.view}>
                {
                    children1
                }
                {
                    children2
                }
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        backgroundColor: '#fff',
        flexDirection: 'column',
        borderRadius: 12,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 12,
        color: '#212121',
        gap: 24,
    },
    view: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: 24,
    },
    heading: {
        width: '100%',
        fontSize: 19,
        fontWeight: 'bold',
        color: '#212121',
    }
});