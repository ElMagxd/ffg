import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.scss';
import MainLayout from './components/MainLayout/MainLayout';

ReactDOM.render(
  <React.StrictMode>
    <MainLayout />
  </React.StrictMode>,
  document.getElementById('root')
);
