import React from "react";
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/login';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router>
            {/* parent scene */}
            <Scene key="root" hideNavBar>
                {/* Login form component scene */}
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" initial />
                </Scene>
                <Scene key="main">
                    <Scene
                        key="employeeList"
                        component={EmployeeList}
                        rightTitle="Add"
                        onRight={() => {
                            Actions.employeeCreate();
                        }}
                        initial
                        title="Employees" />

                    <Scene
                        title="Create Employee"
                        key="employeeCreate"
                        component={EmployeeCreate}></Scene>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;