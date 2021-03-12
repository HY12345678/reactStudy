import React, { Component } from 'react'

export default class handleEvent extends Component {
  constructor(props) {
    super(props);
    this.state={
      value:'初始值'
    }
    // this.handleClick = this.handleClick.bind(this)
  }
  
  //事件在React中叫合成事件，不是原生事件。做了一些封装、兼容和优化

  //函数传值  可通过回调函数进行包装传值
  // handleClick() {
  //   console.log(this.state.value)
  // }
  //改变this的指向三种方法
  // 1、通过bind   （直接传参）
  // 2、在constructor中通过bind改变this （直接传参）
  // 3、使用回调函数   （通过回调函数进行包装传值）
  handleClick = (e) => {
    console.log(e)
    // 阻止事件默认行为
    e.preventDefault();
    //阻止事件冒泡
    // 一种是原生
    e.stopPropagation()
    // 一种是合成事件
    const {nativeEvent} = e;
    nativeEvent.stopPropagation()
    console.log(this.state.value)
  }

  render() {
    //解构赋值
    const {isStudy,arr} = this.props;
    return (
      <div>
        <h3 style={{
          textAlign:'center'
        }}>事件处理</h3>
       {/* <button onClick={ (e)=>{
          this.handleClick(e,'abs')
        }}>点击按钮
       </button>  */}
       {/* <button onClick={ this.handleClick.bind(this) }>点击按钮 */}
       <button onClick={ this.handleClick }>点击按钮
       </button> 
       <div onClick={this.props.onClick}>点击绑定在组件上的事件</div>
      {/* 条件渲染 */}
       {isStudy?'正在学习':'还未学习'} 
       {/* 列表渲染  key*/}
       <ul>
         {
           arr.map((v,index) =>{
             return (<li key={index}>{v}</li>)
           })
         }
       </ul>
      </div>
    )
  }
}
