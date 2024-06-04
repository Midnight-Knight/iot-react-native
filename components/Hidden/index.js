import {View, StyleSheet} from 'react-native';

export default function Hidden() {
    return (
        <View style={styles.container}/>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 12,
    }
})