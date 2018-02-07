import React from 'react';
import ReactDOM from 'react-dom';
import store from './store.js'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import './style/index.css';

ReactDOM.render(<Provider store={store}>
                  <Router>
                    <App />
                  </Router>
                </Provider>,
                 document.getElementById('root'));
