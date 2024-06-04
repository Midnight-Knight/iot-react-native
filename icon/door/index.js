import {View, StyleSheet, Image} from 'react-native';
import * as React from "react"
import Svg, { Path } from "react-native-svg";
import colorStatus from "../../const/colorStatus";

export default function Door({status = 'grey'}) {
    return (
        <View style={[style.image, {backgroundColor: colorStatus[status].backgroundColor}]}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='50%' height='50%' color={colorStatus[status].tintColor} fill="none">
                <Path d="M5 21.9999V5.99988C5 4.11426 5 3.17145 5.58579 2.58566C6.17157 1.99988 7.11438 1.99988 9 1.99988H15C16.8856 1.99988 17.8284 1.99988 18.4142 2.58566C19 3.17145 19 4.11426 19 5.99988V21.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <Path d="M3 21.9999H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <Path d="M16 12.9999L16 10.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </Svg>
        </View>
    )
}

const style = StyleSheet.create({
    image: {
        width: '50%',
        aspectRatio: 1,
        borderRadius: 100,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    }
})