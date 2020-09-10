import React, { Component } from "react"
import "./Detail.css"
import { reqGoodsInfo, reqCartAdd } from "../../util/request"
import querystring from "querystring"
import { filterPrice } from "../../filter/filter"
import { Toast } from "antd-mobile"
export default class Detail extends Component {

  constructor() {
    super()
    this.state = {
      goodsDetail: {},
      isShow: false,
      specsAttr:[],
      currentIndex:0,
      from:{
        uid:"",
        goodsid:"",
        num:1
      }
    }
  }

  componentDidMount() {
    let id = querystring.parse(this.props.location.search.slice(1))
    reqGoodsInfo(id).then(res => {
      if (res.data.code === 200) {
        this.setState({
          goodsDetail: res.data.list[0]
        })
      }
    })
  }

  addShopCar() {
    const { goodsDetail, isShow,specsAttr } = this.state
    if(isShow){
      
      reqCartAdd(this.state.from).then(res=>{
        if(res.data.code===200){
          Toast.success(res.data.msg,1)
        }else {
          Toast.fail(res.data.msg,1)
          return;
        }
      })
    }
    this.setState({
      from:{
        ...this.state.from,
        uid:JSON.parse(sessionStorage.getItem("user")).uid,
        goodsid:goodsDetail.id,
      }
    })
    this.setState({
      isShow: !isShow,
      specsAttr:JSON.parse(goodsDetail.specsattr)
    }) 
  }

  selectSpesc(index){
    this.setState({
      currentIndex:index
    })
  }

  render() {
    const { goodsDetail, isShow,specsAttr,currentIndex } = this.state
    if (this.refs.desc && goodsDetail) {
      this.refs.desc.innerHTML = goodsDetail.description
    }
    return (
      goodsDetail ? (
        <div className="warp" style={{ background: "#f4f4f4" }}>
          <div className="header">
            商品详情
          <a href="#" className="back">返回</a>
          </div>
          <div className="shop">
            <img src={goodsDetail.img} alt="" />
          </div>
          <div className="detail">
            <h3>{goodsDetail.goodsname}</h3>
            <div className="price">
              ￥{goodsDetail.price}
              <del>￥{goodsDetail.market_price}</del>
              {goodsDetail.ishot === 1 ? <button className="hot">热卖</button> : null}
              {goodsDetail.isnew === 1 ? <button className="new">新品</button> : null}
            </div>
            <div className="favo">
              <div className="img"></div>
             收藏
            </div>
          </div>
          <div className="description" ref="desc">
          </div>
          <footer>
            <button className="detail_footer" onClick={() => this.addShopCar()}>加入购物车</button>
          </footer>
          {
            isShow ? (
              <div className="cover">
                <div className="white">
                  <div className="cover_info">
                    <img src={goodsDetail.img} alt="" />
                    <h2>{goodsDetail.goodsname}</h2>
                  </div>
                  <div className="specs_box">
                    <h2>{goodsDetail.specsname}</h2>
                    <div className="specs">
                      {
                        specsAttr.map((item,index)=>{
                        return <span key={item} onClick={()=>this.selectSpesc(index)} 
                        className={index===currentIndex?"selected":""}  >{item}</span>
                        })
                      }
                    </div>
                  </div>
                  <button className="cover_btn" onClick={() => this.addShopCar()}>加入购物车</button>
                </div>
              </div>
            ) : null
          }
        </div>
      ) : null

    )

  }
}