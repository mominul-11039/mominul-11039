import { View, StyleSheet, Text, Image, ScrollView } from "react-native"
import AddressInfoView from "../Components/AdressInfoView";
import BasicInfoView from "../Components/BasicInfoView";
import DepositeCardView from "../Components/DepositeCardView";
import MailAddressView from "../Components/MailAddressView";
import OtherProfileView from "../Components/OtherProfileView";
import PhoneNumberView from "../Components/PhoneNumberView";
import ProfileMenuView from '../Components/ProfileMenuView';
import RemitWebProcedureView from "../Components/RemitWebProcedureView";

const sendIcon = require("../assets/project_img/icon_hikouki_3x.png");

export default function ProfileScreen(props) {
    return (
        <View style={style.container}>
            <ScrollView>
                <View style={style.headerContainer}>        
                    <View style={style.profileImgStyle}>
                        <Image source={sendIcon} style={style.imgStyle} />
                    </View>
                    <Text style={style.nameTextStyle}>
                        {props.data.firstNameEn + props.data.lastNameEn}
                    </Text>
                    <Text style={style.customerTextStyle}>
                        Customer Code : {props.data.userNumber}
                    </Text>
                    <View style={{ height: 1, width: 50, backgroundColor: 'gray', marginTop: 10, marginBottom: 20 }}></View>
                </View>
                <ProfileMenuView 
                    data={props.data}
                />
                <BasicInfoView 
                    data={props.data}
                />
                <AddressInfoView 
                    data={props.data}
                />
                <PhoneNumberView 
                    data={props.data}
                />
                <MailAddressView 
                    data={props.data}
                />
                <DepositeCardView 
                    data={props.data}
                />
                <OtherProfileView 
                    data={props.data}
                />
                <RemitWebProcedureView 
                    data={props.data}
                />
                <View style={{height: 110}}/>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'column',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginTop: 60
    },
    headerContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    profileImgStyle: {
        backgroundColor: '#80A9D4',
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
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
    },
    customerTextStyle: {
        color: "gray",
        fontSize: 8,
        fontWeight: 'normal',
        marginTop: 5,
    },
})