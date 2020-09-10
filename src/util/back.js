import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class back extends Component {

  constructor(props){
    super(props)
  }

  goBack(){
    this.props.history.goBack()
  }


  render() {
    return (
      <div className="back">
        <span onClick={()=>this.goBack()}>返回</span>
      </div>
    )
  }
}

export default withRouter(back)
