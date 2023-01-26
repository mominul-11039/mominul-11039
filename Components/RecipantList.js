const { View, Text, StyleSheet, Image } = require("react-native");
const sendIcon = require("../assets/project_img/icon_hikouki_3x.png");
export default function RecipantList(props) {

    console.log("Testing",props)

    return (
        <View style={style.container}>
            <View style={style.textContainer}>
                <Text style={style.titleStyle}>
                    {props.recipantItem.firstName + " " + props.recipantItem.surName}
                </Text>
                <Text style={style.descStyle}>
                {props.recipantItem.transferCurrencyCode + " " + props.recipantItem.transferCountry +" "+ props.recipantItem.transferWayCodeName}
                </Text>
            </View>
            <Image source={sendIcon} style={style.imgStyle}/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginHorizontal:10,
        backgroundColor:'white',
        marginVertical:5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textContainer: {
        marginHorizontal:5,
        marginVertical:5,
        flex: 1
    },
    titleStyle: {
        color: "#333333",
        fontSize: 16,
        fontWeight:'bold',
        marginStart: 10,
        marginTop: 10,
        marginBottom: 5
    },
    descStyle: {
        color: "gray",
        fontSize: 13,
        fontWeight:'normal',
        marginStart: 10,
        marginBottom: 10,
    },
    imgStyle: {
        resizeMode:'center',
    }
})