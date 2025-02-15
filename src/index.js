import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GlobalContent/Styles/index.css';
import './GlobalContent/Styles/customStyles.scss';
import './GlobalContent/Styles/colors.css'
import {BrowserRouter} from 'react-router-dom'
import App from './Container/App';
import * as serviceWorker from './serviceWorker';
const myApp=<BrowserRouter>
                <App />
            </BrowserRouter>
ReactDOM.render(myApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
