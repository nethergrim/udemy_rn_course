import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from '../common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../../actions';
import styles from './styles';


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

    renderUser() {
        if (this.props.user) {
            return (
                <CardSection>
                    <Text>
                        {this.props.user.user.email}
                    </Text>
                </CardSection>
            );
        }
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderSpinner() {
        if (this.props.loading) {
            return (
                <Spinner></Spinner>
            );
        } else {
            return (
                <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
            );
        }
    }

    render() {
        console.log(this.props);

        return (
            <Card>
                <CardSection>
                    <Input value={this.props.email} label="Email" placeholder="email@gmail.com" onChangeText={this.onEmailChange.bind(this)}></Input>
                </CardSection>
                <CardSection>
                    <Input value={this.props.password} secureTextEntry label="Password" placeholder="Password" onChangeText={this.onPasswordChange.bind(this)}></Input>
                </CardSection>

                {this.renderError()}

                <CardSection>

                    {this.renderSpinner()}
                    
                </CardSection>

                {this.renderUser()}

            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email, // get email from global state of the app
        password: state.auth.password,
        user: state.auth.user,
        loading: state.auth.loading,
        error: state.auth.error,
    };
};


export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);