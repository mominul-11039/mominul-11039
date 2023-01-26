const { View, Text , StyleSheet} = require("react-native");

export default function RecipantValue(props) {


    return (
        <View style={style.container}>
            <Text style={style.titleStyle}>
                Recipant
            </Text>
            <Text style={style.value}>
                {props.recipantListCount}
            </Text>
            <Text style={style.normalTextStyle}>
                case
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    titleStyle: {
        color: "#333333",
        fontSize: 17,
        fontWeight:'bold',
        marginStart: 10,
    },
    value: {
        color: "#333333",
        fontSize: 17,
        fontWeight:'normal',
        marginStart: 10,
    },
    normalTextStyle:{
        color: "#333333",
        fontSize: 15,
        fontWeight:'normal',
        marginStart: 10,
        marginTop: 2
    }
});