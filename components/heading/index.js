import {StyleSheet, View, Text} from "react-native";


export default function Heading() {
    return (
        <View style={style.heading}>
            <Text style={style.text}>Умная кормушка</Text>
        </View>
    )
}

const style = StyleSheet.create({
    heading: {
        width: '100%',
        flexDirection: 'row',
        padding: 16,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderColor: '#BFBFBF',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
    }
});