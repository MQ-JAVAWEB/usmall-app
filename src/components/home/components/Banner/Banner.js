import React from 'react'
import { Carousel } from 'antd-mobile';
import "./Banner.css"
export default function Banner(props) {
  return (
    <div className="banner">
      {
        props.banners?(
          <Carousel
            autoplay
            infinite
          >
            {
              props.banners.map(item=>{
                return <img src={item.img} alt="" key={item.id}/>
              })
            }
          </Carousel>
        ):null
      }
    </div>
  )
}
