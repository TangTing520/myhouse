import React, { Component } from 'react'
import { Flex, WhiteSpace, InputItem, WingBlank, Button } from 'antd-mobile';
import './chat.scss'
export default class Chat extends Component {
    render() {
        return (
            <div className="chat">
                <Flex justify="center" style={{height:'100%'}}>
            <div className="chatbox">
                <img src={require('../../../assets/images/qq.jpg')}/>
              <p>置业顾问:<span style={{color:'#008000'}}>张小妹</span></p>
              <p>专业服务诚信做人诚信做事！</p>
              <Button style={{width:'50%',color:'#fff',background:'#008000',margin:'10px auto'}}>我要聊天</Button>

            </div>
                </Flex>
            </div>
        )
    }
}
