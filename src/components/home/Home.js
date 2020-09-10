import React, { Component } from "react"
import "./Home.css"
import logo from "../../assets/img/img/home/logo.jpg"
import { reqBanner, reqIndexGoodsInfo } from "../../util/request"
import Banner from "./components/Banner/Banner"
import navImg from "../../assets/img/img/home/1.jpg"
import ShopCard from "./components/shopCard/ShopCard"
export default class Home extends Component {

  constructor() {
    super()
    this.state = {
      banners: [],
      goodsInfo: []

    }
  }

  componentDidMount() {
    // 轮播图信息
    reqBanner().then(res => {
      this.setState({
        banners: res.data.list
      })
    });
    // 商品信息
    reqIndexGoodsInfo().then(res => {
      this.setState({
        goodsInfo: res.data.list[0].content
      })
    })
  }

  render() {
    const { goodsInfo, banners } = this.state
    return (

      <div className="warp">
        <div className="home_header">
          <img src={logo} alt="" />
          <div className="right_inp">
            <div className="inp_box">
              <input type="text" name="" id="" placeholder="寻找商品" />
            </div>
          </div>
        </div>
        <div className="banner">
          {banners.length > 0 ? <Banner banners={banners}></Banner> : null}
        </div>

        <div className="nav">
          <a href="#">
            <img src={navImg} className="img" alt="" />
            限时抢购
          </a>
          <a href="#">
            <img src={navImg} className="img" alt="" />
            积分商城
          </a>
          <a href="#">
            <img src={navImg} className="img" alt="" />
            联系我们
          </a>
          <a href="#">
            <img src={navImg} className="img" alt="" />
            商品分类
          </a>

        </div>
        <div className="shop_list">
          {
            goodsInfo.length > 0 ? <ShopCard goodsInfo={goodsInfo}></ShopCard> : null
          }
        </div>

      </div>

    )

  }

}