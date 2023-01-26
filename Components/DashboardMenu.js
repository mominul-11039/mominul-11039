const { View, Text, StyleSheet, Image } = require("react-native");
const changeRateIcon = require("../assets/project_img/icon_rate_3x.png");
const historyIcon = require("../assets/project_img/icon_history_3x.png");
const recipantIcon = require("../assets/project_img/icon_remittance_3x.png");
const bankIcon = require("../assets/project_img/icon_neobank.png");


export default function DashBoardMenu() {
    return (
        <View style={style.container}>
            <View style={style.menuItemStyle}>
                <Image source={changeRateIcon} style={style.imgStyle}/>
                <Text style={style.itemNameStyle}>Change rate</Text>
            </View>
            <View>
                <Image source={historyIcon} style={style.imgStyle}/>
                <Text style={style.itemNameStyle}>History</Text>
            </View>
            <View>
                <Image source={recipantIcon} style={style.imgStyle}/>
                <Text style={style.itemNameStyle}>Recipant</Text>
            </View>
            <View>
                <Image source={bankIcon} style={style.imgStyle}/>
                <Text style={style.itemNameStyle}>NeoBank</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        height:60,
        flex:1,
        flexDirection:'row',
        backgroundColor:"#F7F9FF",
        marginHorizontal: 10,
        justifyContent:'space-between',
        alignItems: 'center',
        marginBottom:10,
    },
    imgStyle:{
        height:40,
        width:40,
        resizeMode:'auto',
        marginEnd:5
    },
    menuItemStyle:{
        heignt:50,
    },
    itemNameStyle:{
        marginTop:5,
        color:"#0068C4",
        fontSize:10,
        fontWeight:'bold',
    }
})