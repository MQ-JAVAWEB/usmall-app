import React from 'react'
import "./ShopCard.css"
import { filterPrice } from '../../../../filter/filter';
import { withRouter } from 'react-router-dom';

function ShopCard(props) {
  const { goodsInfo } = props

  function goodsDetail(id){
    props.history.push("/detail?id="+id)
  }

  return (
    <div>
      {
        goodsInfo ? (

          goodsInfo.map((item,index) => {
           return <div className="list" key={item.id} onClick={()=>goodsDetail(item.id)}>
              <img src={item.img} className="img" />
              <div className="info">
                <h3>{item.goodsname}</h3>
                <p className="price">￥{filterPrice(item.price)}</p>
                <button className="quick_btn">立即抢购</button>
              </div>
            </div>
          })

        ) : null
      }
    </div>
  )
}


export default withRouter(ShopCard)