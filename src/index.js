import React from 'react';
import ReactDOM from "react-dom"
import App from './App';
import "./assets/js/index.js"
import "./assets/css/reset.css"

import 'antd-mobile/dist/antd-mobile.css'
import {HashRouter,BrowserRouter} from "react-router-dom"


ReactDOM.render(
    <HashRouter>
        <App></App>
    </HashRouter>
    ,
    document.getElementById("root")
)