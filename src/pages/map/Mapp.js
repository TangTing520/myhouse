import React, { Component } from 'react'
import { SearchBar, Flex, NavBar, Icon , WhiteSpace } from 'antd-mobile';
export default class Maps extends Component {
    render() {
        return (
            <div >
                  <NavBar
      mode="dark"
      onLeftClick={() => window.history.go(-1)}
      icon={<Icon type="left" />}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >我的地图</NavBar>
               <div id="container" style={{width:'100%',height:'620px'}}></div>
            </div>
        )
    }
    componentDidMount(){
        var map = new window.AMap.Map("container", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 13
        });
            //实例化城市查询类
            var citysearch = new window.AMap.CitySearch();
            //自动获取用户IP，返回当前城市
            citysearch.getLocalCity(function(status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    if (result && result.city && result.bounds) {
                        // var cityinfo = result.city;//定位到的城市
                        var citybounds = result.bounds;
                        // document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
                        //地图显示当前城市
                        map.setBounds(citybounds);
                    }
                } else {
                    document.getElementById('info').innerHTML = result.info;
                }
            });
    }
}
