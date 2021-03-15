import React, { Component } from 'react'
import CommonBox from "./CommonBox"
export default class register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="register">
               <CommonBox name="注册" register={
                   (data) =>{
                       console.log('register',data)
                   }
               }/>
            </div>
        )
    }
}
