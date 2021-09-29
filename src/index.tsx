import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

import App from './App';
import './global.less';

const mountNode = document.getElementById('app');

ReactDOM.render(
  <ConfigProvider direction="rtl" locale={zhCN}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>,
  mountNode
);
