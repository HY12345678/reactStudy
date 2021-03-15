import React, { Component } from 'react'
import Register from './components/register';
import Login from './components/login';
export default class FormParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="form-parent">
                <Login />
                <Register />
                
            </div>
        )
    }
}
