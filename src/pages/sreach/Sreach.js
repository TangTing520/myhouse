import React, { Component } from 'react'
import './search.scss'
import { InputItem, Flex, WhiteSpace, NavBar, Icon, Checkbox, WingBlank, Button, Toast } from "antd-mobile";
export default class Search extends Component {
    render() {
        return (
            <div className="searchs">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" onClick={this.clickBack.bind(this)} />}
                >
                    <InputItem
                        clear
                        placeholder="请输入小区或商业圈名称"
                        ref={el => this.autoFocusInst = el}
                    >
                        <Flex>
                            <select style={{ fontSize: 14, borderRight: "1px solid #ccc" }}>
                                <option>成都市▼</option>
                                <option>深圳市</option>
                                <option>上海市</option>
                                <option>北京市</option>
                            </select>
                            <img src={require('../../assets/images/searchsousuo.png')} />
                        </Flex>
                    </InputItem>
                </NavBar>
                <WingBlank>
                    <WhiteSpace size="lg" />
                    <h2>搜索发现</h2>
                    <Flex>
                        <Flex.Item><Button>天府新区</Button></Flex.Item>
                        <Flex.Item><Button>双流区</Button></Flex.Item>
                        <Flex.Item><Button>武侯区</Button></Flex.Item>
                        <Flex.Item><Button>高新区</Button></Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item><Button>金牛区</Button></Flex.Item>
                        <Flex.Item><Button>双流区</Button></Flex.Item>
                        <Flex.Item><Button>武侯区</Button></Flex.Item>
                        <Flex.Item><Button>高新区</Button></Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item><Button>天府新区</Button></Flex.Item>
                        <Flex.Item><Button>双流区</Button></Flex.Item>
                        <Flex.Item><Button>武侯区</Button></Flex.Item>
                        <Flex.Item><Button>高新区</Button></Flex.Item>
                    </Flex>
                </WingBlank>
            </div>
        )
    }
    clickBack(){
        window.location="#/"
    }
}
