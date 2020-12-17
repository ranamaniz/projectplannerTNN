import { getFirebase } from "react-redux-firebase";

export const ACTIONS={
    LOGIN_SUCCESS:'LOGIN_SUCCESS',
    LOGIN_ERROR:'LOGIN_ERROR',
    SIGNOUT_SUCCESS:'SIGNOUT_SUCCESS'
}

export const signIn = (credentials)=>{
    return (dispatch, getState, {getFirebase})=>{
        const firebase= getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password,
        ).then(()=>{
            dispatch({type:ACTIONS.LOGIN_SUCCESS})
        }).catch((err)=>{
            dispatch({type:ACTIONS.LOGIN_ERROR, err})
        })
    }
}

export const signOut = ()=>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type:ACTIONS.SIGNOUT_SUCCESS})
        });
    }
}