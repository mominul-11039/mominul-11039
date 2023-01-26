import { StyleSheet, View } from 'react-native';
const baseUrl = "http://192.168.51.49:8080/"

export async function getUserInfo() {
  try {
    const response = await fetch(baseUrl+'ugw/main/getUserInfo');
    console.log("Response : ", response.status)
    const json = await response.json();
      // console.log("Logggg : ", json)
      return Promise.resolve({ result: json, error: null})
    // const { result, errmsg} = validateResponse(response)
    // console.log("Loog", result)
    // if (result != null) {
    //   const json = await response.json();
    //   console.log("Logggg : ", json)
    //   return Promise.resolve({ result: json, error: null})
    // } else {
    //   return Promise.resolve({ result: null, error: errmsg})
    // }
  } catch (error) {
      return Promise.resolve({ result: null, error: error.message})
  }
}

export  async function fetchRecipantListValue() {
  try {
    const response = await fetch(baseUrl+'transferReceiptList');
    const json = await response.json();
      // console.log("Recipant List : ", json.transferReceipt)
      return Promise.resolve({result: json.transferReceipt, error: null})
    // const { result, errmsg} = validateResponse(response)
    // console.log("Loog2", result)
    // if (result != null) {
    //   const json = await response.json();
    //   console.log("Recipant List : ", json.transferReceipt)
    //   return Promise.resolve({result: json.transferReceipt, error: null})
    // } else {
    //   return Promise.resolve({result: null, error: errmsg})
    // }
  } catch (error) {
    return Promise.resolve({ result: null, error: error.message})
  }
}

function validateResponse(response) {
  switch (response.status) {
    case 200:
      return (response, null)
    default:
      <View style={styles.centeredView}>
          <ErrorPopup />
      </View>
      // return (null, response.message)
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  }
})