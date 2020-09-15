import React, { Component } from "react"
import "./Login.css"
import {Button, Toast} from "antd-mobile"
import { reqLogin } from "../../util/request"
import { NavLink } from "react-router-dom"
export default class Login extends Component {

  constructor(){
    super()
    this.state={
      form:{
        phone:"",
        password:""
      }
    }
  }

  changeForm(e,key){
    this.setState({
      form:{
        ...this.state.form,
        [key]:e.target.value
      }
    })
  }
  login(){
    reqLogin(this.state.form).then(res=>{
      if(res.data.code === 200){
         sessionStorage.setItem("user",JSON.stringify(res.data.list))
        Toast.success(res.data.msg,1)
        this.props.history.push("/index")
        
      }else {
        Toast.fail(res.data.msg,1)
      }
    })
  }
  render() {
    const {form} = this.state
    return (
      <div className="warp">
        <div className="lg_header">
          登录
          <NavLink to="/register" className="reg">注册</NavLink>
        </div>
        <div className="core">
          <div className="form">
            <form action="#">
              <div className="uname">
                <label htmlFor="username">账号 : &nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" value={form.phone} id="username" onChange={(e)=>this.changeForm(e,"phone")} />
              </div>
              <div className="pwd">
                <label htmlFor="password">密码 : &nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" value={form.password} id="password" onChange={(e)=>this.changeForm(e,"password")} />
              </div>
              <p className="forget">忘记密码</p>
              <Button type="primary" onClick={()=>this.login()}>
                登录
              </Button>
            </form>
          </div>
        </div>
      </div>

    )

  }

}