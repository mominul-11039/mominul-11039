const { View, Text, StyleSheet, Image, Touchable, Pressable } = require("react-native");
const profileIconInactive = require("../assets/project_img/icon_tab_account_inactive-2.png");
const dashboardIcon = require("../assets/project_img/icon_tab_main-2.png");
const menuIconInactive = require("../assets/project_img/icon_tab_menu_inactive-2.png");
const profileIcon = require("../assets/project_img/icon_tab_account-2.png");
const dashboardIconInactive = require("../assets/project_img/icon_tab_main_inactive-2.png");
const menuIcon = require("../assets/project_img/icon_tab_menu-2.png");


export default function DashboardBottomMenu(props) {


    return (
        <View style={style.container}>
            <Pressable onPress={() => {
                props.pressFunc(0)
            }}>
                <Image source={props.index==0 ? profileIcon : profileIconInactive} style={style.imgStyle} />
            </Pressable>
            <Pressable onPress={() => {
                props.pressFunc(1)
            }}>
                <Image source={props.index==1 ? dashboardIcon : dashboardIconInactive} style={style.imgStyle} />
            </Pressable>
            <Pressable onPress={() => {
                props.pressFunc(2)
            }}>
                <Image source={props.index==2 ? menuIcon : menuIconInactive} style={style.imgStyle} />
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderRadius: 10,
        height: 50,
        flex: 1
    },
    imgStyle: {
        height: 40,
        resizeMode: 'center'
    },
})