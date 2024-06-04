import {View, StyleSheet} from "react-native";


export default function Column({children, backgroundOff = false}) {
    return (
        <View style={[style.container, !backgroundOff && { backgroundColor: '#fff'}]}>
            {children}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        padding: 12,
        color: '#212121',
        gap: 12,
    },
})