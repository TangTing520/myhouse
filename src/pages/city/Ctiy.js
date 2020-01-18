import React, { Component } from 'react'
import { WhiteSpace, InputItem, WingBlank, Button, NavBar, Icon, Flex } from 'antd-mobile';
import './city.scss'
import city from '../../json/Ctiy.json'
import Broll from 'better-scroll'
export default class Ctiy extends Component {
 
    render() {
       
        return (
            <div className="miancrtiy">
                <NavBar style={{position:'fixed',top:0,width:'100%',zIndex:1}}
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.go(-1)}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px', }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >选择城市</NavBar>
                <div className="ctirybottom">
                    <div className="crityin">
                         <ul className="content">
                    <WhiteSpace size="lg"/>
                <WingBlank  style={{paddingBottom:'50px'}}  className="ctirytop">
                    <InputItem 
                        placeholder="请输入城市名进行搜索"
                    />
                    <WhiteSpace size="sm" />
                    <p className="ctisy">选择城市</p>
                    <InputItem

                        placeholder="定位失败"
                        extra={<img src={require('../../assets/images/shuaxin.png')} />}
                    ><img src={require('../../assets/images/direc.png')} /></InputItem>
                    <p className="ctisy">最近访问</p>
                    <span className="ctiycouny">成都市</span>
                    <p className="ctisy">热门城市</p>
                    <Flex justify="between">

                        <span className="ctiys">北京</span>
                        <span className="ctiys">上海</span>
                        <span className="ctiys">深圳</span>
                    </Flex>
                    <p className="ctisy">全部城市（按首字母顺序来排）</p>
                    <div className="city-content">
                    <Flex wrap="wrap" justify="start" align="betwwen">
                        {
                            city.map(v=> <span key={v.title} className="letters"  onClick={this.rightclick.bind(this,v.title)}  >{v.title} </span>)
                        }
                    </Flex>
                    </div>
                    {
                        city.map((v,index)=>   <div key={index}>
                        <p id={v.title} className="ctisy" >{v.title}</p>
                    <div className="city-content">
                    <Flex wrap="wrap" justify="start" align="betwwen">
                        {
                            v.lists.map((items,i)=> <span  key={i} className="country">{items}</span>
                            )
                        }
                      
                    </Flex>
                      
                        </div>
                        </div>)
                    }
                 
                      
                </WingBlank>
                    </ul>
               
                    </div>
                   

                </div>
               

                    <div className="rightcity">
                    {
                            city.map(v=> <p key={v.title} onClick={this.rightclick.bind(this,v.title)} className="letters" onTouchMove={this.Movetitle.bind(this)}>{v.title} </p>)
                        }
                       
                       
                    </div>
            </div>
        )
    }
    rightclick(title){
        this.leftbox.scrollToElement('#'+title,600)
    }
    Movetitle(e){
        let x=e.touches[0].clientX
        let y=e.touches[0].clientY
        //获取当前手指的触摸信息数组 如果想要获取当前手指的坐标，必须指定获取哪个手指的坐标
        let elt=document.elementFromPoint(x,y)
        // console.log(elt);
        if(elt.className=='letters'){
            this.leftbox.scrollToElement('#'+elt.innerHTML,600)
        }

    }
    componentDidMount(){
        this.leftbox=new Broll('.crityin',{
            click:true
        })
    }
}
