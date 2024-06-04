import {StyleSheet, Text, View} from "react-native";
import {AnimatedCircularProgress} from "react-native-circular-progress";
import colorStatus from "../../const/colorStatus";

export default function Diagrams({status = "grey"})
{
    return (
        <AnimatedCircularProgress
            size={120}
            width={10}
            fill={10}
            tintColor={colorStatus[status].tintColor}
            backgroundColor={colorStatus[status].backgroundColor}
            rotation={0}>
            {
                () => (
                    <Text style={[style.diagramsText, {color: colorStatus[status].tintColor}]}>
                        10%
                    </Text>
                )
            }
        </AnimatedCircularProgress>
    )
}

const style = StyleSheet.create({
    diagramsText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    circle: {
        flex: 1,
        width: '100%',
    }
});