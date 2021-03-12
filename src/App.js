import './App.css';
import MyState from './components/mystate';
import HandleEvent from './components/handleEvent';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      test:"测试props修改"
    }
  }
  
   changeProps = ()=>{
    this.setState({
      test: 'props已被修改'
    })
  }

  render() {
    let arr = [1,2,3];
    let isStudy = true;
    return (
      <div>
        <div className="App">
      <MyState test={this.state.test} changeProps={this.changeProps}></MyState>
  
        <HandleEvent
          arr={arr}
          isStudy={isStudy}
         onClick={() =>{console.log('点击了点击了')}} />
     
    
      
    </div>
      </div>
    )
  }
}
