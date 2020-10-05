import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default class Demo extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <View style={styles.statusContainer}>
              <View style={styles.typeLabelContainer}><Text style={styles.labelText}>Ship Your Order TO</Text></View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonHalf1}>
                  <Text style={styles.buttonLable1}>Click & Collect</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonHalf2}>
                  <Text style={styles.buttonLable2}>Home Delivery</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.detailContainer}>
              <View style={styles.box1}>

                <View style={styles.box1Label}>
                  <Text style={styles.box1LabelText}>Selet Your Shipping Address</Text>
                </View>
                <View style={styles.userNameContainer}>
                  <View style={styles.userNameContainer1}>
                    <View style={styles.iconStyle}>
                      <View style={styles.iconSubStyle}>
                        <Text></Text>
                      </View>
                    </View>
                    <View style={styles.userNameContainer2}>
                      <Text style={styles.userNameContainer2Label}>
                        Muhammad Jahanzaib Khan
                    </Text>
                    </View>
                  </View>
                  <View style={styles.userStatus}>
                    <Text style={styles.userStatusText}>default</Text>
                  </View>

                </View>

                <View style={styles.UserAddress}>
                  <Text style={styles.UserAddressText}>Tamkeen Head Office, B04, Business Park Behind Jang Joom Center, Jeddah,
                  Al Harram, Suadia Arabia
                  </Text>
                </View>
                <View style={styles.userPhone}>
                  <Text style={styles.userPhoneText}>Mobile: +966568061029</Text>
                </View>
              </View>
              <View style={styles.box2}>
                <TouchableOpacity style={styles.addNewAddress}>
                  <Text style={styles.addBtnText}>Add New Address</Text>
                  <Text style={styles.addBtnText}>+</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.box3}>
                <TouchableOpacity style={styles.checkoutBtn}><Text style={styles.checkoutBtnText}>Checkout Now</Text></TouchableOpacity>
                <Text style={styles.termConditionText}>By continuing to checkout you agree to our <Text style={styles.termConditionTextBold}>Terms and Conditions</Text></Text>
              </View>
              <View style={styles.box4}>
                <View style={styles.box2Container1}>
                  <Text style={styles.box2Container1Label}>Subtotal:</Text>
                  <View style={styles.priceContainer}>
                    <Text style={styles.box2Container1Price}>5,390</Text>
                    <Text style={styles.priceUnit1}> SAR</Text>
                  </View>
                </View>
                <View style={styles.box2Container2}>
                  <Text style={styles.box2Container2Label}>Discount Offer:</Text>
                  <View style={styles.priceContainer}>
                    <Text style={styles.box2Container2Price}>27.35</Text>
                    <Text style={styles.priceUnit2}> SAR</Text>
                  </View>
                </View>
                <View style={styles.box2Container3}>
                  <Text style={styles.box2Container3Label}>Delivery:</Text>
                  <Text style={styles.box2Container3Price}>FREE</Text>
                </View>
                <View style={styles.box2Container4}>
                  <Text style={styles.box2Container4Label}>TOTAL <Text style={styles.box2Container4LabelIdentifier}>(including VAT):</Text></Text>
                  <View style={styles.priceContainer}>
                    <Text style={styles.totalPrice}>5,512</Text>
                    <Text style={styles.priceUnit4}> SAR</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#eff0f1"
  },
  statusContainer: {
    flex: 1,
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 3,
    marginBottom: 15,
  },
  typeLabelContainer: {
    flexGrow: 0.4,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    flexGrow: 0.6,
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonHalf1: {
    height: 60,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#f4511e',
    borderRadius: 50,
    flexGrow: 0.47,
    justifyContent: 'center'
  },
  buttonHalf2: {
    height: 60,
    backgroundColor: '#f4511e',
    borderWidth: 1,
    borderColor: '#f4511e',
    borderRadius: 50,
    flexGrow: 0.47,
    justifyContent: 'center'
  },
  buttonLable1: {
    textAlign: 'center',
    fontSize: 20,
    color: '#f4511e',
  },
  buttonLable2: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',

  },
  detailContainer: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "#fff",
    borderRadius: 3,
    marginBottom: 50
  },
  box1: {
    flex: 1,
    backgroundColor: '#fff'
  },
  box1Label: {
    marginHorizontal: 10,
    paddingVertical: 12
  },
  box1LabelText: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  userNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingVertical: 10
  },
  userNameContainer1: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconStyle: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#f4511e',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  },
  iconSubStyle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#f4511e'
  },
  userStatus: {
    backgroundColor: '#d3cfcf',
    paddingHorizontal: 10,
    paddingVertical: 2
  },
  userStatusText: {
    fontSize: 10,
    color: '#848d95',
  },
  userNameContainer2Label: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  UserAddress: {
    marginHorizontal: 35,
    paddingVertical: 2,
  },
  UserAddressText: {
    fontSize: 16,
    color: '#bbc0c4',
  },
  userPhone: {
    marginHorizontal: 35,
    marginVertical: 20,
    paddingVertical: 10
  },
  userPhoneText: {
    fontSize: 16,
    color: '#bbc0c4'
  },
  box2: {
    marginHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 0.2,
    borderTopWidth: 0.2,
    borderBottomColor: '#bbc0c4',
    borderTopColor: '#bbc0c4',
  },
  addNewAddress: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  addBtnText: {
    fontSize: 20,
    color: '#f4511e'
  },
  box3: {
    marginHorizontal: 10,
    paddingVertical: 30
  },
  checkoutBtn: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#f4511e',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100
  },
  checkoutBtnText: {
    color: '#fff',
    fontSize: 20
  },
  termConditionText: {
    marginVertical: 8,
    fontSize: 9,
    textAlign: 'center'
  },
  termConditionTextBold: {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  box4: {
    marginHorizontal: 10,
    paddingVertical: 30,
  },
  box2Container1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginVertical: 6
  },
  box2Container1Label: {
    fontSize: 18,
  },
  box2Container1Price: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  box2Container2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginVertical: 6
  },
  box2Container2Label: {
    fontSize: 18,
  },
  box2Container2Price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f4511e'
  },
  box2Container3: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginVertical: 6
  },
  box2Container3Label: {
    fontSize: 18,
  },
  box2Container3Price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f4511e'
  },
  box2Container4: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginVertical: 20
  },
  box2Container4Label: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  box2Container4LabelIdentifier: {
    fontSize: 15,
    fontWeight: '400'
  },
  box2Container4Price: {
    fontSize: 18,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: 'center'
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f4511e'
  },
  priceUnit1: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  priceUnit2: {
    fontSize: 16,
    color: '#f4511e',
    fontWeight: 'bold'
  },
  priceUnit4: {
    fontSize: 16,
    color: '#f4511e',
    fontWeight: 'bold'
  },


});

