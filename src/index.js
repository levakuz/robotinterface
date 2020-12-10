import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import io from 'socket.io-client';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import reducer from "./reducers/root";

const store = createStore(reducer)

const socket = io(
  window.location.protocol + '//' + window.location.hostname + ':8090'
);

socket.on('UPDATE_ROBOTS', state =>
  store.dispatch({type: 'UPDATE_ROBOTS', state})
);
socket.on('UPDATE_RFID', state =>
  store.dispatch({type: 'UPDATE_RFID', state})
);
socket.on('cashboxerrors', state =>
  alert(state)
);

socket.on('UPDATE_ORDERS', state =>{
  store.dispatch({type: 'UPDATE_ORDERS', state})}
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


export function sendData(store, message) {
  socket.emit('sendData', store, message);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
