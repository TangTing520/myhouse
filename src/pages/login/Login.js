import React, { Component } from 'react'
import './login.scss'
import { Flex, WhiteSpace, InputItem, WingBlank, Button, Toast } from 'antd-mobile';
import { Link } from 'react-router-dom';

import { login } from '../../api/apis'
import { id } from 'postcss-selector-parser';
export default class Login extends Component {
    state = {
        user: '',
        pwd: '',
        olduser: '',
        oldpwd: ''
    }
    render() {
        let { user, pwd } = this.state
        return (
            <div>

                <Flex justify="center">
                    <img style={{ width: 100, height: 100, marginTop: 70 }} src={require('../../assets/images/logo.jpg')} />
                </Flex>
                <WhiteSpace size="xl" />
                <WingBlank >
                    <InputItem
                        placeholder="请输入用户名"
                        clear
                        value={user}
                        onChange={(val) => { this.setState({ user: val }) }}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/images/user.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <InputItem
                        placeholder="请输入密码"
                        clear
                        value={pwd}
                        onChange={(val) => { this.setState({ pwd: val }) }}
                        type="password"
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/images/pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace size="lg" />
                    <Button onClick={this.sendlogin} activeStyle={{ background: '#31B5AE' }} style={{ color: '#fff', background: '#45CCC6' }}>登录</Button>

                    <Flex justify="between">


                        <Link to="/reg">手机登录注册</Link>
                        <Link to="/forget">忘记密码？</Link>
                    </Flex>

                </WingBlank>


            </div>
        )
    }
    sendlogin = async () => {
        /*  login(this.state.user,this.state.pwd).then(req=>{
             console.log(req);
             
         }) */
        let acc = this.state.user;
        let pwd = this.state.pwd
        this.setState({
            olduser: acc,
            oldpwd: pwd
        })
        if (this.state.olduser == acc && this.state.oldpwd == pwd) return
        let req = await login(acc, pwd)
        if (req.data == 'ok') {
            window.location.href = '/login'
        } else {

            Toast.fail('登录失败', 1);
        }


    }
}
