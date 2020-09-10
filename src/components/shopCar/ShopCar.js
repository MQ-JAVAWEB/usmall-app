import React, { Component } from "react"
import "./ShopCar.css"
import { reqCartList } from "../../util/request"
import storeImg from "../../assets/img/store.png"
import radioNor from "../../assets/img/radio_nor.png"
import radioHig from "../../assets/img/radio_hig.png"
import editorNor from "../../assets/img/editor_nor.png"
import editorHig from "../../assets/img/editor_hig.png"
export default class ShopCar extends Component {

  constructor() {
    super()
    this.state = {
      cartList: [],
      status:false,
      editor:false
    }
  }


  componentDidMount() {
    let uid = JSON.parse(sessionStorage.getItem("user")).uid

    reqCartList({ uid }).then(res => {
      this.setState({
        cartList: res.data.list
      })
    })
  }

  selectOne(index){
    const { cartList} = this.state
    cartList[index].checked = !cartList[index].checked
    this.setState({
      cartList
    })
  }

  selectAll(){
    const { cartList,status } = this.state
    this.setState({
      status:!status
    })
    
    cartList.forEach(item=>{
        item.checked = !status
    })
    
  }

  render() {
    const { cartList,status } = this.state
    return (
      <div className="warp">
        <div className="header">
          购物车
        </div>
        <div className="shop_list">

          <ul>
            {
              cartList.length>0 ? (
                cartList.map((item,index) => {
                  return (
                    <li key={item.goodsid}>
                    <div className="title">
                      <img className="shop_img" src={storeImg} />
                        杭州保税区仓
                    </div>
                    <div className="goodsInfo"> 
                      <div className="inp_circle" onClick={()=>this.selectOne(index)}>
                        <img src={item.checked?radioHig:radioNor} alt=""/>
                      </div>
                      <img src={item.img} className="img" alt="" />
                      <div className="intro">
                        <p>
                          {item.goodsname}
                        </p>
                        <div className="count">
                          <span className="red">-</span>
                          <span className="num">{item.num}</span>
                          <span className="add">+</span>
                        </div>
                      <p className="price">总价 ：¥{item.price * item.num}</p>
                      </div>
                      <div className="onePrice">
                        ￥{item.price}
                        </div>
                    </div>
                  </li>
                  )
                })

              ) : null
            }
          </ul>
        </div>
        <div className="settlement">
          <div className="circle_box">
            <div className="inp_circle" onClick={()=>this.selectAll()}>
              <img src={status?radioHig:radioNor} alt=""/>
            </div>
            全选
          </div>
          <div className="edit_box">
            <div className="edit">
              <img className="img" src={editorNor} />
            </div>
            编辑
          </div>
          <div className="info">
            <p>合计:0.00</p>
            <p>(不含运费)</p>
          </div>
          <button className="goSet">去结算</button>
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
