import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
// import MyRoute from "./util/asyncComponent"
import Login from "./components/login/Login.js"
import Register from "./components/register/Register.js"
import Index from "./components/Index/Index.js"
import Detail from "./components/detail/Detail.js"

import ClassifyDetail from "./components/classify-detail/ClassifyDetail.js"

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/detail" component={Detail} />
        <Route path="/classifyDetail/:fid/:catename" component={ClassifyDetail} />
        <Route path="/index" component={Index} />
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;
