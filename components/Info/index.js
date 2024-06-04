import {StyleSheet, Text, View} from "react-native";
import colorStatus from "../../const/colorStatus";


export default function Info({number, meaning, status = "grey"}) {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, {color: colorStatus[status].tintColor}]}>{number}</Text>
            <Text style={[styles.text, {color: colorStatus[status].tintColor}]}>{meaning}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
        flex: 1,
        height: '100%',
    },
    text: {
        fontSize: 36,
        fontWeight: 'bold',
    }
});