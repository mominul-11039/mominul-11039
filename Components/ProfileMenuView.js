const { View, Text, StyleSheet, Image, Dimensions } = require("react-native");
const messageBoxIcon = require("../assets/project_img/icon_mailbox_3x.png");
const noticeIcon = require("../assets/project_img/icon_notification_3x.png");
const remittanceIcon = require("../assets/project_img/icon_bankaccount_info_3x.png");
const bankIcon = require("../assets/project_img/icon_neobank.png");


export default function ProfileMenuView(props) {
    return (
        <View style={style.container}>
            <View style={style.itemContainer}>
                <Image source={messageBoxIcon} style={style.imgStyle}/>
                <Text style={style.itemNameStyle}>Message box</Text>
            </View>
            <View style={style.itemContainer}>
                <Image source={noticeIcon} style={style.imgStyle}/>
                <Text style={style.itemNameStyle}>Information/ Campaigns</Text>
            </View>
            <View style={style.itemContainer}>
                <Image source={remittanceIcon} style={style.imgStyle}/>
                <Text style={style.itemNameStyle}>Remittance Reserve Account Information</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        height:60,
        flexDirection:'row',
        backgroundColor:"white",
        justifyContent:'space-between',
        marginStart: 10,
        marginTop: 20,
    },
    itemContainer: {
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    imgStyle:{
        height:40,
        width:40,
        marginStart: 10,
        resizeMode:'center',
    },
    itemNameStyle:{
        width: 100,
        marginTop:5,
        color:"#0068C4",
        fontSize:10,
        fontWeight:'bold',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})