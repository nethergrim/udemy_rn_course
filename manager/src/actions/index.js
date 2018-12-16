import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from './types';
import firebase from 'firebase';


export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => { // manual dispatcher of actions
        firebase
            .auth() // async request
            .signInWithEmailAndPassword(email, password)
            .then(user => console.log(user))
            .then(user => {
                dispatch({ type: LOGIN_USER_SUCCESS, payload: user});
            })
            ;
    };
};