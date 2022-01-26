import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import AppNavigator from './src/navigations/Navigator'
import { AppLoading } from 'expo'
import { db } from './firebase'
import { collection, getDocs, } from "firebase/firestore";


export default class App extends React.Component {
  state = {
    isFontLoaded: false
  }
  // state = {
  //   user: false,
  //   messages: []
  // }

  async componentDidMount() {
    await Font.loadAsync({
      'Bold': require('./src/fonts/Montserrat-ExtraBold.otf'),
      'Medium': require('./src/fonts/Montserrat-Medium.otf'),
      'Regular': require('./src/fonts/Montserrat-Regular.otf'),
    });
    this.setState({ isFontLoaded: true })
    // fetchMessages()
  }

  render() {
    // const fetchMessages = () => {
    //   const query = db.collection('reports');
    //   query.onSnapshot((snapshot) => {
    //     snapshot.docChanges().forEach((change) => {
    //       const messageObj = {}
    //       messageObj.data = change.doc.data()
    //       messageObj.id = change.doc.id
    //       this.setState({
    //         ...this.state,
    //         messages: [messageObj, ...this.state.messages]
    //       })
    //     })
    //   })
    // }


    return (
      // (this.state.isFontLoaded === true) ? (<AppNavigator />) : (<AppLoading />)
      (this.state.isFontLoaded === true) ? (<AppNavigator />) : null
    );
  }
}
