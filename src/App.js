import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
// import MyRoute from "./util/asyncComponent"
import MyRoute from "./components/MyRoute/MyRoute"
import asyncComponent from "./util/asyncComponent"
const Login= asyncComponent(()=>import("./components/login/Login.js"))
const Register = asyncComponent(()=>import("./components/register/Register.js"))
const Index = asyncComponent(()=>import("./components/Index/Index.js"))
const Detail = asyncComponent(()=>import("./components/detail/Detail.js"))
const ClassifyDetail = asyncComponent(()=>import("./components/classify-detail/ClassifyDetail.js"))


function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <MyRoute path="/register" component={Register} />
        <MyRoute path="/detail" component={Detail} />
        <MyRoute path="/classifyDetail/:fid/:catename" component={ClassifyDetail} />
        <MyRoute path="/index" component={Index} />
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;
