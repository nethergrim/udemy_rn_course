import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import Router from './Router';
import ReduxThunk from 'redux-thunk';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyAFnvXEm5D91HOKwVkXeV9BEx11Bc9ffw8",
      authDomain: "manager-37cc4.firebaseapp.com",
      databaseURL: "https://manager-37cc4.firebaseio.com",
      projectId: "manager-37cc4",
      storageBucket: "manager-37cc4.appspot.com",
      messagingSenderId: "552711192342"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <SafeAreaView>
          <Router />
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
