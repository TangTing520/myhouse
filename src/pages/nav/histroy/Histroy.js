import React, { Component } from 'react'
import {connect} from 'react-redux'
import { IP } from '../../../api/apis'
import { Flex, WhiteSpace, InputItem, WingBlank, Icon , NavBar, List } from 'antd-mobile';
const Item = List.Item;
 class Histroy extends Component {
  
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    leftContent="<"
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />
                    ]}
                >我的历史记录</NavBar>
{
    this.props.state.map((v,i)=>  
    
    <Flex justify="between"   key={i} >
                                <Flex className="love">
                                    <img style={{ width: 100, height: 105 }} src={IP+v.imgs} />
                                    <div className="caih3">
                                        <h3>{v.name}</h3>
                                        <p><span>{v.area}</span>&emsp;<span>{v.range}</span></p>
                                        <p><span>{v.type}</span>&emsp;<span>{v.point}</span></p>
                                    </div>
                                </Flex>
                               
                            </Flex>
    

    
    
    )
}
               
            </div>
        )
    }
}
export default connect((state)=>{
    return {state}
})(Histroy)