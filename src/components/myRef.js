import React, { Component } from 'react'

export default class myRef extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        //通过此方式创建ref拿到的是一个current对象
        this.inputRef = React.createRef()
        
    }
    componentDidMount () { 
        //在此中ref用来解决
        console.log(this.inputRef)
        // this.inputRef.focus()
        // this.inputRef.current.focus()


        this.props.onRef(this.inputRef)
    }
    
    render() {
        return (
            <div>
                <label>
                    请输入关键词进行搜索
                    {/* ref */}
                    {/* <input
                        // ref={(el) => this.inputRef = el}   通过此方式拿到的直接是原生的标签
                        ref = {this.inputRef }
                        style={{
                            padding:' 0 10px'
                        }}
                        type="text"
                    ></input> */}

                    {/* onRef */}
                    <input
                        // ref={(el) => this.inputRef = el}   通过此方式拿到的直接是原生的标签
                        ref = {this.inputRef }
                        style={{
                            padding:' 0 10px'
                        }}
                        type="text"
                    ></input>
                </label>
            </div>
        )
    }
}
