import React, { Component } from 'react'
import { SearchBar, Flex, Carousel, WingBlank, WhiteSpace } from 'antd-mobile';
import "./home.scss";
import { homelist,IP } from '../../../api/apis'
import {connect} from 'react-redux'
// import { red } from 'ansi-colors';

class Home extends Component {
    state = {
        value: '二手房',
        data: ['banner', 'banner1', 'banner2'],
        imgHeight: 150,
        listmenu: [
            { bg: "#FF5A5F", img: "mainxinfang", title: "新房" },
            { bg: "#A782B9", img: "mainershoufang", title: "二手房" },
            { bg: "#F6D149", img: "mainzufang", title: "租房" },
            { bg: "#F9DB9F", img: "mainlou", title: "写字楼" }

        ],
        listmenu1: [
            { bg: "#FFA650", img: "mainmaifang", title: "卖房" },
            { bg: "#57AFF8", img: "mainfeiji", title: "海外" },
            { bg: "#00E4DD", img: "mainxiaoqu", title: "小区" },
            { bg: "#D29BCB", img: "mainwenda", title: "问答" }

        ],
        houselist: [
            { img: "maindaikuai", title: "我要贷款" },
            { img: "mainjisuanqi", title: "房贷计算" },
            { img: "mainzhishi", title: "知识" },
            { img: "mainsao", title: "扫一扫" },
        ],

        /* 猜你喜欢 */
        lovelist: [],
        mycity:'定位中',
    }
    render() {
        let { listmenu, listmenu1, houselist, lovelist,mycity } = this.state
        return (
            <div className="home">

                <Flex justify="between" style={{ background: '#46CDC6' }} >
                    <div onClick={this.headtop.bind(this, '#/city')} style={{ background: '#46CDC6', border: 0, color: '#fff' }}>
                        {mycity}&#x25BC;
                    </div>
                    <div onClick={this.headtop.bind(this, '#/sreach')} className="search"><img src={require('../../../assets/images/icon_search.png')} />  <p>跳上好房，上子弹租房App</p></div>
                    <img onClick={this.headtop.bind(this, '#/map')} style={{ width: 30, height: 30 }} src={require('../../../assets/images/map.png')} />
                </Flex>
                {/* 走马灯 */}
                <Carousel
                    autoplay={false}
                    infinite
                    

                >
                    {this.state.data.map((val,i) => (
                        <a
                            key={i}

                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={require('../../../assets/images/' + val + '.jpg')}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top', height: 200 }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                {/* 列表菜单 */}
                <div className="listtable">
                    <WingBlank>
                        <Flex justify="between" >
                            {
                                listmenu.map((v,i) => <div  key={i} className="list">
                                    <div className="listtop" style={{ background: v.bg }}><img style={{ width: 30, height: 30 }} src={require('../../../assets/images/' + v.img + '.png')} /></div>
                                    {v.title}
                                </div>)
                            }

                        </Flex>
                        <Flex justify="between" >
                            {
                                listmenu1.map(v => <div className="list" key={v.title}>
                                    <div className="listtop" style={{ background: v.bg }}><img style={{ width: 30, height: 30 }} src={require('../../../assets/images/' + v.img + '.png')} /></div>
                                    {v.title}
                                </div>)
                            }

                        </Flex>

                    </WingBlank>



                </div>
                <WhiteSpace size="sm" />
                {/* 房产全百科 */}
                <div className="listtable">
                    <WingBlank>

                        <Flex justify="start" className="titleh3">
                            <h3>房产全百科</h3>
                            <p>专业的买房攻略</p>

                        </Flex>
                        <Flex justify="between" >
                            {
                                houselist.map(v => <div className="list" key={v.title}>
                                    <div ><img style={{ width: 35, height: 35 }} src={require('../../../assets/images/' + v.img + '.png')} /></div>
                                    {v.title}
                                </div>)
                            }



                        </Flex>

                    </WingBlank>



                </div>
                <WhiteSpace size="sm" />
                {/* 猜你喜欢 */}
                <div className="listtable">
                    <WingBlank size="sm" >
                        {
                            lovelist.map((v, index) => <Flex justify="between" onClick={this.lovelist.bind(this,v)} key={index} >
                                <Flex className="love">
                                    <img style={{ width: 100, height: 105 }} src={IP+v.imgs} />
                                    <div className="caih3">
                                        <h3>{v.name}</h3>
                                        <p><span>{v.area}</span>&emsp;<span>{v.range}</span></p>
                                        <p><span>{v.type}</span>&emsp;<span>{v.point}</span></p>
                                    </div>
                                </Flex>
                                <div style={{ color: 'red', fontSize: 22, fontWeight: 'bold' }}>{v.price}/平</div>
                            </Flex>)
                        }


                    </WingBlank>



                </div>

            </div>
        )
    }
    headtop(http) {
        window.location.href = http;
    }

    componentDidMount=async() =>{

           /*  homelist().then(req => {
                console.log(req.data);

            }) */
            let vm=this;
             let req=await homelist()
     
             this.setState({
                 lovelist:req.data
             })

              //实例化城市查询类
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                    // document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
                    // //地图显示当前城市
                    // map.setBounds(citybounds);
                    vm.setState({
                        mycity:cityinfo
                    })
                }
            } else {
                // document.getElementById('info').innerHTML = result.info;
            }
        });
             
    }
    lovelist(v){
        let time=new Date()
        console.log(time);
        
        this.props.dispatch({
            type:'addlist',
            houselist:v
        })
    }
    componentWillUnmount () {
        // simulate img loading
        /* 解决内存泄漏 */
         this.setState = (state,callback)=>{
      return;
    };
      }
}
export default connect()(Home)
