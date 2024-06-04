import {View, StyleSheet, Text} from "react-native";


export default function Row({children}) {
    return (
        <View style={style.container}>
            {children}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 16,
        borderRadius: 12,
    },
})