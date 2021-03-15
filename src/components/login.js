import React, { Component } from 'react'
import CommonBox from "./CommonBox"
export default class login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    //render props
    // 状态提升  把子组件的状态提升到父组件中去使用，这种方式就叫状态提升

    render() {
        return (
            <div className="login">
                <CommonBox name="登录" login={
                   (data) =>{
                       console.log('login',data)
                   }
               }/>
            </div>
        )
    }
}
