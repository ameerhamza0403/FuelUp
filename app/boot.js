import React, { Component } from "react";
import Appmain from "./App";
// import * as firebase from "firebase";
import stripe from 'tipsi-stripe'


class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      isAuthenticationReady: false,
      isAuthenticated: false,
      // firebaseConfig : {
      //   apiKey: "AIzaSyC-Jhv1x-7dy_RO6J1P_vBsleffHvmkAng",
      //   authDomain: "seanmrn-deliveryapp.firebaseapp.com",
      //   databaseURL: "https://seanmrn-deliveryapp.firebaseio.com",
      //   projectId: "seanmrn-deliveryapp",
      //   storageBucket: "seanmrn-deliveryapp.appspot.com",
      //   messagingSenderId: "666905430549",
      //   appId: "1:666905430549:web:124b45f33d6ba048dddc1c",
      //   measurementId: "G-RMLZ5NZE21"
      // },
    };
    // if (!firebase.apps.length) {
    //   firebase.initializeApp(this.state.firebaseConfig);
    // }
    // firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  // onAuthStateChanged = user => {
  //   console.log(this.state.isAuthenticated)
  //   this.setState({ isAuthenticationReady: true });
  //   this.setState({ isAuthenticated: !!user });
  //   this.props.handleAuth(this.state.isAuthenticated)

  // };

  componentDidMount(){
    console.disableYellowBox = true;
    stripe.setOptions({
      publishableKey:
        'pk_test_51HALwYItdjNfM4fWFI9hUC8rco38P7sbN49doApeOkUD1DeDwnggqGPFPGhM9EM4tfq19BxJF26h5uKJZv20xLCt00kMWZKV1j',
      // merchantId: 'MERCHANT_ID', // Optional
      androidPayMode: 'test', // Android only
    });
  }

  render() {
    return (
        <Appmain route={this.props.route}/>
    );
  }
}

export default Setup

  ;
