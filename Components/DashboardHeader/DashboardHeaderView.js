const { View, Text, StyleSheet, Image } = require("react-native");
import DashboardHeaderMiddleView from './DashboardHeaderMiddleView';
import NoticeView from './NoticeView';
const noticeIcon = require("../../assets/project_img/illust_kamihikouki_3x.png");
const rigthArrow = require("../../assets/project_img/icon_arrow-right_mid_3x.png");
const illustrateBoy = require("../../assets/project_img/illust_boy_3x.png");
const illustrateGirl = require("../../assets/project_img/illust_girl_3x.png");

export default function DashboardHeaderView(props) {
    return (
        <View style={style.container}>
            <NoticeView/>
            <View style={style.imgContainer}>
                <Image source={require("../../assets/project_img/illust_kamihikouki_3x.png")} style={style.imgStyle}/>
            </View>
            <View style={style.middleContainer}>
                
                <DashboardHeaderMiddleView
                    userData={props.userInfo}
                />
                <View>
                    <Image source={illustrateBoy} style={style.illustrateBoyStyle}/>
                </View>
                <View>
                    <Image source={illustrateGirl} style={style.illustrateGirlStyle}/>
                </View>
            </View>
            <View style={{backgroundColor:'white', height: 25, marginTop: -20}}></View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection:'column',
        backgroundColor:'#5A89F7'
    },
    imgContainer: {
        justifyContent:'center',
        alignItems:'center',
    },
    middleContainer: {
        zIndex: 1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom:10,

    },
    imgStyle: {
        height: 40,
        width: 300,
        resizeMode:'center'
    },
    illustrateBoyStyle: {
        zIndex: 1,
        height: 100,
        width: 56,
        resizeMode:'center',
        marginStart: -260,
        shadowColor:'black',
        shadowOffset:{width:0, height:-1},
        shadowOpacity:0.2,
        shadowRadius:5,
        elevation:2,
    },
    illustrateGirlStyle: {
        height: 100,
        width: 46,
        resizeMode:'center',
        marginStart:-5,
        shadowColor:'black',
        shadowOffset:{width:0, height:-1},
        shadowOpacity:0.2,
        shadowRadius:5,
        elevation:2,
    },
})