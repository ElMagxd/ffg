import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'antd/dist/antd.css';
import './index.scss';
import MainLayout from './components/MainLayout/MainLayout';

ReactDOM.render(
    <Provider store={store}>
        <MainLayout />
    </Provider>,
    document.getElementById('root'),
);
