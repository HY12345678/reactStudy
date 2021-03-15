import React, { Component } from 'react'

export default class CommonBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username:'',
            password:''
        }
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
    }
    handleInputChange = (e) => {
        const { name,value} = e.target
        // this.setState({
        //     ...this.state,
        //     [name]:value
        // })

        if(name == 'username') {
            console.log(this.usernameRef,'usernameRef')
            this.usernameRef.current = value;
        }
        else{
            this.passwordRef.current = value;
        }
    }
    handleOnClick = () => {
        if(this.props.name === '登录') {
            // this.props.login(this.state)
            this.props.login({
                username:this.usernameRef.current,
                password:this.passwordRef.current
            })
        }
        else 
            // this.props.register(this.state);
            this.props.register({
                username:this.usernameRef.current,
                password:this.passwordRef.current
            })
    }
    // 受控组件   接受react的控制  
    // 非受控组件   不接受react的控制，直接通过dom的方式来获取或操作值
    // 需要借助一个操作dom的东西  ref
    // ref 是可以直接操作Dom或者从原生Dom上获取该元素的name或者value以及其他的值
    //并且这个值是实时更新的，只要你设置了就会实时保存，但是不会引起页面的刷新。
    render() {
        return (
            <div className="box">
            <p>
                <span>用户名：</span>
                <input 
                    type="text"  
                    ref = {this.usernameRef}
                    name="username" 
                    // value={this.state.username} 
                    onChange={ this.handleInputChange } 
                    placeholder="请输入用户名" 
                />
            </p>
            <p>
                <span>密码：</span>
                <input 
                    type="password" 
                    ref = {this.passwordRef}
                    name="password" 
                    // value={this.state.password}  
                    onChange={ this.handleInputChange } 
                    placeholder="请输入密码" 
                />
            </p>
            <p>
                <button onClick={ this.handleOnClick}>
                    {this.props.name}
                </button>
            </p>
            </div>
        )
    }
}
