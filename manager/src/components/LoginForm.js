import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';


class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input value={this.props.email} label="email" placeholder="email@gmail.com" onChangeText={this.onEmailChange.bind(this)}></Input>
                </CardSection>
                <CardSection>
                    <Input value={this.props.password} secureTextEntry label="Password" placeholder="Password" onChangeText={this.onPasswordChange.bind(this)}></Input>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email, // get email from global state of the app
        password: state.auth.password,
        user: state.auth.user,
    };
};


export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);