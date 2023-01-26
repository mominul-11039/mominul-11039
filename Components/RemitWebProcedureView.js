const { View, Text, StyleSheet, Image, Dimensions } = require("react-native");

export default function RemitWebProcedureView(props) {

    console.log("Testing",props)

    return (
        <View style={style.container}>
            <Text style={style.titleTextStyle}>
                Procedure on Remit WEB
            </Text>
            <View style={style.infoContainer}>
                <View style={style.textContainer}>
                    <View style={style.titleViewStyle}>
                        <Text style={style.titleStyle}>
                            Member information inquiry / change
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
                            Email confirmation
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
                            Change Login Password
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
                            Change Transaction Password
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
                            About Termination of Membership
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
                            Applying for Remit Membership + Opening a bank account
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
    },
    infoContainer: {
        width: Dimensions.get("screen").width - 20,
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
        marginHorizontal: 5
    },
    textContainer: {
        marginHorizontal:10,
        marginVertical:5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
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