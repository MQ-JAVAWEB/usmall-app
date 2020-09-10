import React, { Component } from 'react'
import "./Index.css"
import Mine from "../mine/Mine.js"
import ShopCar from "../shopCar/ShopCar.js"
import Home from "../home/Home.js"
import Classify from "../classify/Classify.js"
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'

// 图片
import homeSelected from "../../assets/img/tab_home_hig.png"
import homeNoSelected from "../../assets/img/tab_home_nor.png"
import classifySelected from "../../assets/img/tab_menu_hig.png"
import classifyNoSelected from "../../assets/img/tab_menu_nor.png"
import shopCarSelected from "../../assets/img/tab_shopping_hig.png"
import shopCarNoSelected from "../../assets/img/tab_shopping_nor.png"
import mineSelected from "../../assets/img/tab_me_hig.png"
import mineNoSelected from "../../assets/img/tab_me_nor.png"


export default class Index extends Component {

  constructor() {
    super()
    this.state = {
      navs: [
        {
          name: "首页",
          selected: homeSelected,
          noSelected: homeNoSelected,
          path: "/index/home"
        },
        {
          name: "分类",
          selected: classifySelected,
          noSelected: classifyNoSelected,
          path: "/index/classify"
        },
        {
          name: "购物车",
          selected: shopCarSelected,
          noSelected: shopCarNoSelected,
          path: "/index/shopCar"
        },
        {
          name: "我的",
          selected: mineSelected,
          noSelected: mineNoSelected,
          path: "/index/mine"
        }
      ]
    }
  }

  render() {
    const {pathname} = this.props.location
    return (
      <div>

        <Switch>
          <Route path="/index/home" component={Home}></Route>
          <Route path="/index/classify" component={Classify}></Route>
          <Route path="/index/shopCar" component={ShopCar}></Route>
          <Route path="/index/mine" component={Mine}></Route>
          <Redirect to="/index/home"></Redirect>
        </Switch>


        <div className="footer">
          {
            this.state.navs.map(item => {
              return (
                <NavLink to={item.path} key={item.path}>
                  <img className="img" src={pathname===item.path?item.selected:item.noSelected} alt="" />
                  {item.name}
                </NavLink>
              )
            })
          }

          
        </div>
      </div>
    )
  }
}
