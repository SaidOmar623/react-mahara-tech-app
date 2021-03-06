import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/react-toastify/dist/ReactToastify.css'
import App from './components/App';


ReactDOM.render(
     <BrowserRouter>
        <App />
     </BrowserRouter>, 
     document.getElementById('root') );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
