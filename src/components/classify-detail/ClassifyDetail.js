import React, { Component } from "react"
import "./ClassifyDetail.css"
import { reqGoods } from "../../util/request"
import ShopCard from  "../home/components/shopCard/ShopCard"
export default class ClassifyDetail extends Component {
  
  constructor(){
    super()
    this.state={
      goods:[]
    }
  }

  componentDidMount(){
    let fid = {
      fid:this.props.match.params.fid
    }
    reqGoods(fid).then(res=>{
      if(res.data.code===200){
        this.setState({
          goods:res.data.list
        })
      }
    })
  }

  render() {
    const {goods} = this.state
    const {catename} = this.props.match.params
    return (

      <div className="warp">
        <div className="header">
          {catename}
          <a href="#" className="back">返回</a>
        </div>
        <div className="shop_list">
        {
            goods ? <ShopCard goodsInfo={goods}></ShopCard> : null
          }
        </div>
      </div>
    )
  }

}