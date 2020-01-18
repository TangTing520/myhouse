import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';

import Home from './home/Home'
import Chat from './chat/Chat'
import Histroy from './histroy/Histroy'
import My from './My/My'
export default class Nav extends Component {
state={
    selectedTab: 'Life',
    fullScreen: true,
    tabitems:[
      {title:'首页',key:"Life",img:'house',imgs:'housecolor',child:<Home/>},
      {title:'聊天',key:"Koubei",img:'chat',imgs:'chatcolor',child:<Chat/>},
      {title:'足迹',key:"Friend",img:'histroy',imgs:'histroycolor',child:<Histroy/>},
      {title:'我的',key:"mys",img:'my',imgs:'mycolor',child:<My/>},
    ]
}
/* renderContent() {
       
  switch(this.state.selectedTab){
    case 'Life':
     return <Home/>
    case 'Koubei':
     return <Chat/>
    case 'Friend':
     return <Histroy/>
    case 'mys':
     return <My/>
    
  }
} */

    render() {
let {tabitems} =this.state
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
              
               <TabBar
                unselectedTintColor="#949494"
                tintColor="#46CDC6"
                barTintColor="white"
                tabBarPosition="bottom"
              >
               {  tabitems.map((v)=><TabBar.Item
                  title={v.title}
                  key={v.key}
                  icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${require('../../assets/images/'+v.img+'.png')}) center center /  21px 21px no-repeat` }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${require('../../assets/images/'+v.imgs+'.png')}) center center /  21px 21px no-repeat` }}
                  />
                  }
                  selected={this.state.selectedTab === v.key}
                
                  onPress={() => {
                    this.setState({
                      selectedTab: v.key,
                    });
                  }}
                 
                >
                   {v.child}
                 {/* <Home/> */}
                </TabBar.Item>)}
                
              </TabBar>
              
            
          </div>
        )
    }
  
}
