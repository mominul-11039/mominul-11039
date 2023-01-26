const { View, Text, StyleSheet, Image } = require("react-native");
const noticeIcon = require("../../assets/project_img/icon_notice_3x.png");
const rigthArrow = require("../../assets/project_img/icon_arrow-right_mid_3x.png");

export default function NoticeView() {
    return (
        <View style={style.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require("../../assets/project_img/icon_notice_3x.png")} style={style.noticeImg}></Image>
                <Text style={style.textStyle}>
                    Important Notice
                </Text>
            </View>
            <View>
                <Image source={require("../../assets/project_img/icon_arrow-right_mid_3x.png")} style={style.arrowImg}></Image>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#BDD2FC",
        marginHorizontal: 20,
        borderRadius:5,
        marginTop:10
    },
    noticeImg: {
        height: 20,
        width: 20,
        flexDirection: 'row',
        marginStart: 10,
    },
    arrowImg: {
        resizeMode:"center"
    },
    textStyle: {
        color: "#0068C4",
        fontSize: 15,
        marginStart:20,
    }
})