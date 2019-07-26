import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App store={configureStore()}/>,
    document.getElementById('root'));
registerServiceWorker();
