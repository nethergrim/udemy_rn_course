import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_STARTED, LOGIN_ERROR } from '../actions/types';


const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    error: '',
    user: undefined
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, loading: false, error: '' };
        case LOGIN_STARTED:
            return { ...state, loading: true, error: '', user: undefined }
        case LOGIN_ERROR:
            return { ...state, password: '', loading: false, error: 'Authentication failed' };
        default:
            return state;
    }
};