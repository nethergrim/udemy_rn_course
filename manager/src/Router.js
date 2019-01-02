import React from "react";
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/login';


const RouterComponent = () => {
    return (
        <Router>
            {/* parent scene */}
            <Scene key="root">
                {/* Login form component scene */}
                <Scene key="login" component={LoginForm} title="Please Login">

                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;