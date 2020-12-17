import {ACTIONS} from '../actions/authActions';

const initState={
    authError:null,
}

const authReducer = (state=initState, action)=>{
    switch(action.type){
        case ACTIONS.LOGIN_ERROR:
            console.log('login failed');
            return {
                ...state,
                authError:'Login Failed'
                // authError:`Login Failed:${action.err}`,                
            }
        case ACTIONS.LOGIN_SUCCESS:
            console.log('login success');
            return{
                ...state,
                authError:null,
                authResponse:'Login Success'
            }
        case ACTIONS.SIGNOUT_SUCCESS:
            console.log('signout success');
            return state;
        default:
            return state
    }
}

export default authReducer;