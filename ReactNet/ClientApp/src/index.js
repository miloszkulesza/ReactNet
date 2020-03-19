import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/js/all.min.js'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>, rootElement);

registerServiceWorker();

