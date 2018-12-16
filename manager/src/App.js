import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import LoginForm from './components/LoginForm'

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
      <Provider store={createStore(reducers)}>
        <SafeAreaView>
          <LoginForm></LoginForm>
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
