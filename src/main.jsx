import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import zhCN from 'antd/locale/zh_CN';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import LogOut from './pages/logOut/logOut';



ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ConfigProvider locale={zhCN}  >
      <Routes>
        <Route path='/admin/*' element={<App />}/>
        <Route path='/' element={<LogOut />}/>
      </Routes>
    </ConfigProvider>
  </Router>
)
