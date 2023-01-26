const { View, Text, StyleSheet, Image, Dimensions } = require("react-native");

export default function DepositeCardView(props) {

    console.log("Testing",props)

    return (
        <View style={style.container}>
            <Text style={style.titleTextStyle}>
                Deposite Card
            </Text>
            <View style={style.infoContainer}>
                <View style={style.textContainer}>
                    <View style={style.titleViewStyle}>
                        <Text style={style.titleStyle}>
                            Usage classification
                        </Text>
                    </View>
                    <View style={style.descViewStyle}>
                        <Text style={style.descStyle}>
                            {props.data.depositCardClassification}
                        </Text>
                    </View>
                </View>
                <View style={style.textContainer}>
                    <View style={style.titleViewStyle}>
                        <Text style={style.titleStyle}>
                        Control number
                        </Text>
                    </View>
                    <View style={style.descViewStyle}>
                        <Text style={style.descStyle}>
                            {props.data.depositCardNumber}
                        </Text>
                    </View>
                </View>
                <View style={style.textContainer}>
                    <View style={style.titleViewStyle}>
                        <Text style={style.titleStyle}>
                        Sending method
                        </Text>
                    </View>
                    <View style={style.descViewStyle}>
                        <Text style={style.descStyle}>
                            {props.data.depositCardSendingMethod}
                        </Text>
                    </View>
                </View>
                <View style={style.textContainer}>
                    <View style={style.titleViewStyle}>
                        <Text style={style.titleStyle}>
                        Destination
                        </Text>
                    </View>
                    <View style={style.descViewStyle}>
                        <Text style={style.descStyle}>
                            {props.data.depositCardAddress}
                        </Text>
                    </View>
                </View>
                <View style={style.textContainer}>
                    <View style={style.titleViewStyle}>
                        <Text style={style.titleStyle}>
                        Delivary date
                        </Text>
                    </View>
                    <View style={style.descViewStyle}>
                        <Text style={style.descStyle}>
                            {props.data.depositCardDeliveryDate}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 20,
    },
    infoContainer: {
        width: Dimensions.get("screen").width - 40,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#F7F9FF',
        marginHorizontal: 20
    },
    textContainer: {
        marginHorizontal:10,
        marginVertical:5,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    emptyViewContainer: {
        height: 10,
    },
    correctionViewContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    titleTextStyle: {
        color: "#0068C4",
        fontSize: 14,
        fontWeight:'bold',
        marginStart: 15,
        marginBottom: 10
    },
    titleViewStyle: {
        alignSelf: 'flex-start'
    },
    descViewStyle: {
        alignSelf: 'flex-end'
    },
    titleStyle: {
        color: "#333333",
        fontSize: 12,
        fontWeight:'bold',
        marginHorizontal: 5
    },
    descStyle: {
        color: "gray",
        fontSize: 10,
        fontWeight:'normal',
        marginHorizontal: 5
    },
    correctStyle: {
        color: "#0068C4",
        fontSize: 10,
        fontWeight:'normal',
        marginHorizontal: 5
    },
    imgStyle: {
        resizeMode:'center',
    }
})