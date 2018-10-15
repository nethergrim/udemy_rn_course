import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = {
        user: null,
        loading: true
    };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBWrK8gFBRpfgRL9d30bVlF467Yo-vtC50",
            authDomain: "authentication-b4863.firebaseapp.com",
            databaseURL: "https://authentication-b4863.firebaseio.com",
            projectId: "authentication-b4863",
            storageBucket: "authentication-b4863.appspot.com",
            messagingSenderId: "28711483935"
        });

        firebase.auth().onAuthStateChanged((user) => {
            this.setState({ user: user, loading: false });
        });
    }

    renderContent() {
        if (this.state.loading) {
            return <Spinner size="large"></Spinner>;
        }
        if (this.state.user) {
            return (
                <Button onPress={() => firebase.auth().signOut()}>
                    Log Out
                </Button>
            );
        }
        return <LoginForm />
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }



}

const styles = {
    containerStyle: {
        // flex: 1,
        // justifyContent: 'flex-start',
        // alignItems: 'center'
    }
};





export default App;