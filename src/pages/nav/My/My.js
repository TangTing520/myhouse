import React, { Component } from 'react'
import { WhiteSpace, InputItem, WingBlank, Button, List, Checkbox, Flex } from 'antd-mobile';
import './my.scss'
const Item = List.Item;
// const Brief = Item.Brief;
export default class My extends Component {
    state = {
        mylist: [
            { title: "我的积分", imgs: "myjifen2" },
            { title: "我的订阅", imgs: "wifi" },
            { title: "微聊联系人", imgs: "myuser" },
            { title: "" },
            { title: "房贷计算器", imgs: "myjisuanqi" },
            { title: "我的房子", imgs: "myxing" },
            { title: "" },
            { title: "查看房记录", imgs: "mytime" },
            { title: "我的问答", imgs: "mywenda" },
            { title: "" },
            { title: "设置", imgs: "myshezhi-2" },
            { title: "意见反馈", imgs: "" }
        ]
    }
    render() {
        let { mylist } = this.state
        return (
            <div>
                {/* 我的 */}
                <div className="head">
                    <WingBlank size="md">
                        <WhiteSpace />
                        <Flex align="start">
                            <div>

                                <img src={require('../../../assets/images/header.jpg')} />
                            </div>
                            <div className="seting">
                                <Flex justify="between">

                                    <h3>登录/注册</h3>   <div className="sing"><img style={{ width: 27, height: 27, marginRight: '10px' }} src={require('../../../assets/images/myshezhi.png')} /></div>
                                </Flex>

                                <p>可以和登录人一起聊天</p>
                            </div>
                        </Flex>
                        <WhiteSpace />
                        <Flex justify="between" >
                            <Flex direction="column" className="my" style={{ border: 0 }}>
                                <div>0</div>
                                <div>
                                    <img style={{ width: 27, height: 27, marginRight: '10px' }} src={require('../../../assets/images/myfang.png')} />
                                    钱包
        </div>
                            </Flex>
                            <Flex direction="column" className="my">
                                <div>0</div>
                                <div>
                                    <img style={{ width: 27, height: 27, marginRight: '10px' }} src={require('../../../assets/images/youhui.png')} />
                                    优惠
        </div>
                            </Flex>
                            <Flex direction="column" className="my">
                                <div>0</div>
                                <div>
                                    <img style={{ width: 27, height: 27, marginRight: '10px' }} src={require('../../../assets/images/jifen.png')} />
                                    积分
        </div>
                            </Flex>
                        </Flex>
                    </WingBlank>
                </div>
                <WhiteSpace />
                <div className="bgfff">
                    {
                        mylist.map((v,i) => {
                            if (v.title != '' && v.imgs != '') {
                                return <Item key={i}
                                    thumb={require(`../../../assets/images/${v.imgs}.png`)}
                                    arrow="horizontal"
                                    onClick={() => { }}
                                >{v.title}</Item>
                            }
                            else if (v.imgs == '') {
                                return <Item key={i}
                                    arrow="horizontal"
                                    onClick={() => { }}
                                >{v.title}</Item>
                            } else {

                                return <div key={i}  style={{ background: '#F4F4F4', height: 9 }}></div>
                            }

                        })


                    }



                </div>
                <WhiteSpace />



            </div>
        )
    }
}
