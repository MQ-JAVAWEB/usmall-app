import React, { Component } from "react"
import "./Mine.css"
import Img from "../../assets/img/icon_refund.png"
import keep from "../../assets/img/keep.png"
import tx from "../../assets/img/1.jpg"
import news from '../../assets/img/news.png'
import set from '../../assets/img/set.png'
export default class Mine extends Component {



  render(){
    const user  = JSON.parse(sessionStorage.getItem("user"))
    return (
      <div className="warp">
        <div className="mine_header">
          <img className="left_img" src={set} />
          <div className="mine">个人中心</div>
          <img className="right_img" src={news}/>
        </div>
        <div className="avatar">
          <img src={tx} className="img" alt=""/>
          <span>{user.nickname}</span>
          <div className="sc">
            
            <img src={keep} alt=""  className="icon"/>
            我的收藏（5）
          </div>
        </div>
        <div className="order">
          <div className="myOrder">我的订单</div>
          <div className="look">查看订单</div>
        </div>
        <div className="mine_nav">
          <a href="#">
            
            <img src={Img} alt=""  className="img"/>
            代发货
          </a>
          <a href="#">
          <img src={Img} alt=""  className="img"/>
            代发货
          </a>
          <a href="#">
          <img src={Img} alt=""  className="img"/>
            代发货
          </a>
          <a href="#">
          <img src={Img} alt=""  className="img"/>
            代发货
          </a>
          <a href="#">
          <img src={Img} alt=""  className="img"/>
            代发货
          </a>
        </div>
        <div className="address">
          收货地址管理
        </div>
        <div className="footer">
          <a href="#">
            <div className="img"></div>
            首页
          </a>
          <a href="#">
            <div className="img"></div>
            分类
          </a>
          <a href="#">
            <div className="img"></div>
            购物车
          </a>
          <a href="#">
            <div className="img"></div>
            我的
          </a>
        </div>
      </div>
    )
  }
}