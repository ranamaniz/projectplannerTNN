import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

// import fbConfig from './config/fbConfig';
import firebase from './config/fbConfig'

// import {reduxFirestore, getFirestore} from 'redux-firestore';
// import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';

import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, 
          // reactReduxFirebase, 
          getFirebase } from 'react-redux-firebase';

import 'firebase/firestore';

const rrfConfig = { 
  userProfile: 'projects',
  useFirestoreForProfile: true
}

const store=createStore(rootReducer, 
    compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      // reduxFirestore(fbConfig),
      // reactReduxFirebase(fbConfig),

      reduxFirestore(firebase),

    )
);

const rffProps = {
    // fbConfig,
    firebase,
    useFirestoreForProfile: true,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rffProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
