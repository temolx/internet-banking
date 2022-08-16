import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import AccountReducer from './reducers/AccountReducer';
import TransactionReducer from './reducers/TransactionReducer';
import CardReducer from './reducers/CardReducer';
import ProfileReducers from './reducers/ProfileReducers';
import ProfileInfoReducer from './reducers/ProfileInfoReducer';

const store = configureStore({
  reducer: {
    accounts: AccountReducer,
    transactions: TransactionReducer,
    cards: CardReducer,
    profileImg: ProfileReducers,
    profileInfo: ProfileInfoReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
