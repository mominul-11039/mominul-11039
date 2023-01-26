import { View, StyleSheet, Text, ScrollView, Image, Dimensions } from "react-native"
import RemittanceView from "../Components/SettingsScreenViews/RemittanceView"
import ReciptView from '../Components/SettingsScreenViews/ReciptView';
import DepositWithdrawalView from "../Components/SettingsScreenViews/DepositWithdrawalView";
import BottomView from "../Components/SettingsScreenViews/BottomView";

const logoutIcon = require("../assets/project_img/icon_logout_3x.png");

export default function SettingsScreen() {
    return (
        <View style={style.container}>
            <ScrollView>
                <View style={style.headerContainer}>        
                    <Text style={style.nameTextStyle}>
                        Last login date and time
                    </Text>
                    <View style={style.profileImgStyle}>
                        <Image source={logoutIcon} style={style.imgStyle} />
                    </View>
                </View>
                <View style={{ height: 1, width: Dimensions.get("screen").width - 40, backgroundColor: 'gray', marginTop: 10, marginBottom: 20, marginHorizontal: 20 }}></View>
                <RemittanceView />
                <ReciptView />
                <DepositWithdrawalView />
                <BottomView />
                <View style={{height: 110, backgroundColor: '#F7F9FF'}}/>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'column',
        borderTopRightRadius: 15,
        marginTop: 60,
        paddingTop: 20
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20
    },
    profileImgStyle: {
        marginTop: 30,
        width: 60,
        height: 60,
        borderRadius: 30
    },
    imgStyle: {
        width: 60,
        height: 60,
        resizeMode: 'center',
    },
    nameTextStyle: {
        color: "#333333",
        fontSize: 10,
        fontWeight: 'normal',
        marginTop: 10,
    },
    customerTextStyle: {
        color: "gray",
        fontSize: 8,
        fontWeight: 'normal',
        marginTop: 5,
    },
})