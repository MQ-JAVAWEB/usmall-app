import React, { Component } from "react"
import "./Register.css"
import { reqRegister } from "../../util/request"
import { Toast } from "antd-mobile"
export default class Register extends Component {

  constructor(){
    super()
    this.state={
      form:{
        phone:"",
        nickname:"",
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

  register(){
    reqRegister(this.state.form).then(res=>{
      if(res.data.code===200){
        this.props.history.push("/login")
        Toast.success(res.data.msg, 1);
      }else {
        Toast.fail(res.data.msg, 1);
      }
    })
  }


  render() {
    const {form} = this.state
    
    return (
      <div className="warp">
        <div className="header">
          注册
          <a href="#" className="back">返回</a>
        </div>
        <div className="core">
          <div className="form">
            
              <div className="uname">
                <label htmlFor="username">手机号 : </label>
                <input type="text" value={form.phone} id="username" onChange={(e)=>this.changeForm(e,"phone")}/>
              </div>
              <div className="pwd">
                <label htmlFor="nickname">昵称 : &nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" value={form.nickname} id="nickname" onChange={(e)=>this.changeForm(e,"nickname")}/>
              </div>
              <div className="pwd">
                <label htmlFor="password">密码 : &nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" value={form.password} id="password" onChange={(e)=>this.changeForm(e,"password")}/>
              </div>
              <p className="forget">忘记密码</p>
              <button className="login" onClick={()=>this.register()}>
                注册
              </button>
            
          </div>
        </div>
      </div>
    )
  }
}