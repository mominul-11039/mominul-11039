const { View, Text, StyleSheet, Image } = require("react-native");
const logoIcon = require("../../assets/project_img/logo.png");
const eayOn = require("../../assets/project_img/icon_eye_on_3x.png");
const eayOff = require("../../assets/project_img/icon_eye_off_3x.png");

export default function DashboardHeaderMiddleView(props) {
    return (
        <View style={style.container}>
            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                <Image source={require("../../assets/project_img/logo.png")} style={style.logoImg}></Image>
            </View>
            <View style={style.textContainer}>
                <Text style={style.nameTextStyle}>
                    {props.userData.firstNameEn+" "+props.userData.lastNameEn}
                </Text>
                <Text style={style.customerTextStyle}>
                    Customer Code : {props.userData.userNumber}
                </Text>
                <Text style={style.customerTextStyle}>
                    Balance
                </Text>
                <View style={{height:1, width: 20, backgroundColor:'red', marginTop: 10, marginBottom:5}}></View>
                <View style={style.balanceContainer}>
                    <Text style={style.balanceTextStyle}>
                        1,497,201
                    </Text>
                    <Text style={{textAlign:'bottom', marginStart:5, marginTop:8}}>
                        JPY
                    </Text>
                    <Image source={eayOn} style={style.eayImage}/>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        // zIndex: 1,
        height: 160,
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderRadius:5,
        shadowColor:'black',
        shadowOffset:{width:5, height:5},
        shadowOpacity:0.5,
        shadowRadius:5,
        elevation:5,
        marginStart:50
    },
    textContainer:{
        flexDirection:"column",
        justifyContent:'center',
        alignItems:'center'
    },
    balanceContainer: {
        marginStart: 40,
        flexDirection:'row',
    },
    logoImg: {
        height:20,
        width:70,
        resizeMode:"auto",
        margin:10
    },
    eayImage: {
        resizeMode:"center",
        marginBottom:10,
    },
    nameTextStyle: {
        color: "#0068C4",
        fontSize: 22,
        fontWeight:'bold'
    },
    customerTextStyle: {
        color: "gray",
        fontSize: 8,
        fontWeight:'normal'
    },
    balanceTextStyle: {
        color: "#333333",
        fontSize: 22,
        fontWeight:'bold'
    },
})