import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';


const store = configureStore();

const jsx = ( 
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
);

store.dispatch(startSetExpenses());
ReactDOM.render(jsx, document.getElementById('app')); 