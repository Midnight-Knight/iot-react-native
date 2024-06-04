import {View, StyleSheet, Image} from 'react-native';
import * as React from "react"
import Svg, { Path } from "react-native-svg";
import colorStatus from "../../const/colorStatus";

export default function Turbidity({status = 'grey'}) {
    return (
        <View style={[style.image, {backgroundColor: colorStatus[status].backgroundColor}]}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='50%' height='50%' color={colorStatus[status].tintColor} fill="none">
                <Path d="M3.5 13.678C3.5 9.49387 7.08079 5.35907 9.59413 2.97222C10.9591 1.67593 13.0409 1.67593 14.4059 2.97222C16.9192 5.35907 20.5 9.49387 20.5 13.678C20.5 17.7804 17.2812 22 12 22C6.71878 22 3.5 17.7804 3.5 13.678Z" stroke="currentColor" strokeWidth="1.5" />
                <Path d="M4 12.284C5.46463 11.8303 8.39159 11.6836 11.9842 13.7016C15.57 15.7157 18.516 14.9984 20 14.1354" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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