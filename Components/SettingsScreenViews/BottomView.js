const { View, Text, StyleSheet, Image, Dimensions } = require("react-native");

export default function BottomView(props) {

    console.log("Testing",props)

    return (
        <View style={style.container}>
            <Text style={style.titleTextStyle}>
                Fees
            </Text>
            <Text style={style.titleTextStyle}>
                Exchange Rate
            </Text>
            <Text style={style.titleTextStyle}>
                Overseas receiving Agencies
            </Text>
            <Text style={style.titleTextStyle}>
                Terms and Conditions
            </Text>
            <Text style={style.titleTextStyle}>
                Handling of Personal Information
            </Text>
            <Text style={style.titleTextStyle}>
                Policy on Compansation for Damage Due
            </Text>
            <Text style={style.titleTextStyle}>
                Contact us
            </Text>
            <Text style={style.titleTextStyle}>
                FAQ
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 20,
        backgroundColor: '#F7F9FF',
        paddingHorizontal: 20,
    },
    titleTextStyle: {
        color: "#0068C4",
        fontSize: 10,
        fontWeight:'normal',
        marginStart: 5,
        marginVertical: 15,
    },
})