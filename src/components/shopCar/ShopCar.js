import React, { Component } from "react"
import "./ShopCar.css"
import { reqCartList, reqCartEdit, reqCartDel } from "../../util/request"
import storeImg from "../../assets/img/store.png"
import radioNor from "../../assets/img/radio_nor.png"
import radioHig from "../../assets/img/radio_hig.png"
import editorNor from "../../assets/img/editor_nor.png"
import editorHig from "../../assets/img/editor_hig.png"
import { Toast } from "antd-mobile"
export default class ShopCar extends Component {

  constructor() {
    super()
    this.state = {
      cartList: []
    }
    this.status=false
    this.editor=false
  }

  componentDidMount() {
    let uid = JSON.parse(sessionStorage.getItem("user")).uid
    let CartArr = this.state.cartList.length === []?[]:this.state.cartList.map(item=>item.checked)
    reqCartList({ uid }).then(res => {
      var cartList = res.data.list
      cartList.forEach((item,index)=>{
        item.checked = CartArr[index]
      })
      this.setState({
        cartList
      })
    })
  }
  

  selectOne(index){
    const { cartList} = this.state
    cartList[index].checked = !cartList[index].checked
    this.setState({
      cartList
    })
    cartList.every(item=>item.checked)?this.status= true:this.status=false
    
  }

  selectAll(){
    const { cartList} = this.state
    this.status = !this.status
    this.setState({})
    cartList.forEach(item=>{
        item.checked = this.status
    })
  }

  edit(){
    this.editor=!this.editor
    this.setState({})
  }

  changeNum(index,bool){
    const { cartList} = this.state
    if(bool){
      cartList[index].num++
      let id = cartList[index].id
      let type = 2
      reqCartEdit({id,type}).then(res=>{

      })
    }else {
      cartList[index].num--
      if(cartList[index].num<1){
        cartList[index].num = 1
        return
      }
      let id = cartList[index].id
      let type = 1
      reqCartEdit({id,type}).then(res=>{
        
      })
    }
    this.setState({
      cartList
    })
  }


  delGoods(index){
    const { cartList} = this.state
    let id = cartList[index].id
    reqCartDel({id}).then(res=>{
      if(res.data.code===200){
        Toast.success(res.data.msg,1)
        this.componentDidMount()
      }else {
        Toast.fail(res.data.msg,1)
      }
    })
    
  }


  render() {
    const { cartList} = this.state
    let sum = 0
    cartList===null || cartList.forEach(item=>{
      if(item.checked){
        sum += item.price * item.num
      }else {
      }
    })
    
    
    

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
                    <div className={this.editor?"goodsInfo transfrom":"goodsInfo"}> 
                      <div className="inp_circle" onClick={()=>this.selectOne(index)}>
                        <img src={item.checked?radioHig:radioNor} alt=""/>
                      </div>
                      <img src={item.img} className="img" alt="" />
                      <div className="intro">
                        <p>
                          {item.goodsname}
                        </p>
                        <div className="count">
                          <span className="red" onClick={()=>this.changeNum(index,false)}>-</span>
                          <span className="num">{item.num}</span>
                          <span className="add" onClick={()=>this.changeNum(index,true)}>+</span>
                        </div>
                      <p className="price">总价 ：¥{item.price * item.num}</p>
                      </div>
                      <div className="onePrice">
                        ￥{item.price}
                      </div>
                      <div className="del" onClick={()=>this.delGoods(index)}>
                        删除
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
              <img src={this.status?radioHig:radioNor} alt=""/>
            </div>
            全选
          </div>
          <div className="edit_box">
            <div className="edit" onClick={()=>this.edit()}>
              <img className="img" src={!this.editor?editorNor:editorHig} />
            </div>
            编辑
          </div>
          <div className="info">
            <p>合计:{sum}</p>
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
