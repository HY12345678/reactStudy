import React, { Component } from 'react'
import Add from "./add";
import ShowImage from "./showImage"
import "./index.css"
export default class upload extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="upload">
                <Add />
                <ShowImage />
            </div>
        )
    }
}
