import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DashboardBottomMenu from './Components/DashboardBottomMenu';
import DashboardScreen from './screens/DashboardScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import homeViewModel from './ViewModel/HomeViewModel';
import ErrorPopup from './Components/ErrorPopup';

export default function App() {

  const {error, data, recipantList, fetchUserInfo, fetchRecipantList} = homeViewModel();

  var selectedIndex = 1
  const [index,setIndex] = useState(selectedIndex)

  useEffect(() => {
    fetchUserInfo();
    fetchRecipantList();
  }, []);

  function setBottomMenuValue(tagValue) {
    setIndex(tagValue)
    console.log("Tag Value", index);
  }

  return (
    <View style={styles.container}>
        <View style={styles.dummyContiner}>
          {
            index == 1 ? <DashboardScreen
              data={data}
              recipantList={recipantList}
            /> : index == 2 ? <SettingsScreen
                data={data}
            /> : <ProfileScreen
                data={data}
            />
          }
        </View>
        <View style={styles.zIndexView}>
          <DashboardBottomMenu 
            pressFunc={setBottomMenuValue}
            index={index}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 0,
    backgroundColor: '#5A89F7'
  },
  dummyContiner: {
    flex: 1,
  },
  flatList: {
    backgroundColor: '#F7F9FF'
  },
  zIndexView: {
    marginBottom: 50,
    marginTop: -100,
    zIndex: 1,
    height: 50,
    width: 200,
    marginHorizontal: 100,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 10,
  }
});
