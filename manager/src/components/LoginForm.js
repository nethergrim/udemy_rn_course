import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';


class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input value={this.props.email} label="email" placeholder="email@gmail.com" onChangeText={this.onEmailChange.bind(this)}></Input>
                </CardSection>
                <CardSection>
                    <Input secureTextEntry label="Password" placeholder="Password" onChangeText={this.onPasswordChange.bind(this)}></Input>

                </CardSection>
                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email // get email from global state of the app
    };
};


export default connect(mapStateToProps, { emailChanged })(LoginForm);