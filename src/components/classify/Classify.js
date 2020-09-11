import React, { Component } from "react"
import "./Classify.css"
import { reqCateTree } from "../../util/request"
import CateTree from "./components/CateTree/CateTree"
export default class Classify extends Component {

  constructor() {
    super()
    this.state = {
      cateTree: [],
      currentIndex: 0
    }
  }

  componentDidMount() {
    reqCateTree().then(res => {
      this.setState({
        cateTree: res.data.list
      })
    })
  }

  cate(index) {
    this.setState({
      currentIndex: index
    })
  }

  getGoods(fid,catename){
    this.props.history.push("/classifyDetail/"+fid+"/"+catename)
  }


  render() {

    const { cateTree, currentIndex } = this.state
    return (
      <div className="warp">
        <div className="header">
          分类
        </div>
        <div className="classify">
          <div className="left">
            {
              cateTree.length>0 ? (
                cateTree.map((item, index) => {
                  return <a onClick={() => this.cate(index)} className={index === currentIndex ? "select" : ""} key={item.id}>
                    {item.catename}
                  </a>
                })
              ) : null
            }

          </div>
          <div className="right">
            <ul>
              {
                cateTree.length>0 ? (
                  cateTree[currentIndex].children.map(item => {
                    return  <li key={item.id} onClick={()=>this.getGoods(item.id,item.catename)}>
                              <img className="img"  src={item.img}/>
                              {item.catename}
                            </li>
                  })
                ) : null
              }
            </ul>
          </div>
        </div>

      </div>
    )
  }
}
