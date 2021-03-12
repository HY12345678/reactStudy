import React, { Component } from 'react'

export default class mystate extends Component {
  constructor(props){
    super(props);
    this.state={
      value:'初始值'
    }
  }
  
  handleClick = () => {
   const obj={
     value :'修改之后的值'
   };
  //  this.props.test = 'pp'  //只读，不能直接修改
  this.props.changeProps()
   this.setState(obj)
  }

  //setState 发现state里面没有修改的属性时，则添加该属性，否则就覆盖值
  render() {
    return (
      <div>
        <input type="text" onChange={(e)=>{
          const ll = e.target.value;
          this.setState({
            value:ll
          })
        }}></input>
        <p>输入的值：
          <span>
            {this.state.value}
          </span>
        </p>
        <button onClick={ this.handleClick }>点击修改</button>
        <em>{ this.state.value}</em>
        <p>{ this.props.test}</p>
      </div>
    )
  }
}
