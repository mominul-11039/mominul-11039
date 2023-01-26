const { View, Text, StyleSheet, Image, Dimensions } = require("react-native");

export default function DepositWithdrawalView(props) {

    console.log("Testing",props)

    return (
        <View style={style.container}>
            <Text style={style.titleTextStyle}>
                Deposits and withdrawals
            </Text>
            <View style={style.infoContainer}>
                <View style={style.textContainer}>
                    <View style={style.titleViewStyle}>
                        <Text style={style.titleStyle}>
                            Deposit method
                        </Text>
                    </View>
                    <View style={style.descViewStyle}>
                        <Text style={style.descStyle}>
                            {'>'}
                        </Text>
                    </View>
                </View>
                <View style={style.textContainer}>
                    <View style={style.titleViewStyle}>
                        <Text style={style.titleStyle}>
                            Deposit/withdrawal history to/from
                        </Text>
                    </View>
                    <View style={style.descViewStyle}>
                        <Text style={style.descStyle}>
                            {'>'}
                        </Text>
                    </View>
                </View>
                <View style={style.textContainer}>
                    <View style={style.titleViewStyle}>
                        <Text style={style.titleStyle}>
                            Amount withdrawal request
                        </Text>
                    </View>
                    <View style={style.descViewStyle}>
                        <Text style={style.descStyle}>
                            {'>'}
                        </Text>
                    </View>
                </View>
                <View style={style.textContainer}>
                    <View style={style.titleViewStyle}>
                        <Text style={style.titleStyle}>
                            Amount withdrawal request history
                        </Text>
                    </View>
                    <View style={style.descViewStyle}>
                        <Text style={style.descStyle}>
                            {'>'}
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
        marginHorizontal: 20,
    },
    infoContainer: {
        width: Dimensions.get("screen").width - 40,
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10
    },
    textContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        marginVertical: 15,

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
        marginStart: 5,
        marginBottom: 10,
    },
    titleViewStyle: {
        alignSelf: 'flex-start',
    },
    descViewStyle: {
        alignSelf: 'flex-end',
    },
    titleStyle: {
        color: "#333333",
        fontSize: 12,
        fontWeight:'normal',
        marginHorizontal: 5,
        alignSelf: 'flex-start'
    },
    descStyle: {
        color: "gray",
        fontSize: 10,
        fontWeight:'normal',
        marginHorizontal: 5,
        textAlign: "right",
        alignSelf: 'flex-end'
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