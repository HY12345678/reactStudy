import './App.css';
// import MyState from './components/mystate';
// import HandleEvent from './components/handleEvent';
import React, { Component } from 'react';
// import FormParent from "./FormParent"
// import MyRef from "./components/myRef"
import Upload from "./components/upload"
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
  };
  handleClick=() => {
    this.myfocus.current.focus()
  }

  render() {
    // let arr = [1,2,3];
    // let isStudy = true;
    return (
      <div>
        <div className="App">
      {/* <MyState test={this.state.test} changeProps={this.changeProps}></MyState>
  
        <HandleEvent
          arr={arr}
          isStudy={isStudy}
         onClick={() =>{console.log('点击了点击了')}} />
      */}
        {/* 受控与非受控组件 */}
        {/* <FormParent /> */}

        {/* ref */}
        {/* <MyRef onRef={(ref)=> this.myfocus = ref}/>
        <br />
        <br />
        <button onClick={this.handleClick}>点我获得焦点</button> */}

        {/* 上传文件案例 */}
        <Upload />      
    </div>
      </div>
    )
  }
}
