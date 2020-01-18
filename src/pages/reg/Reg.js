import React, { Component } from 'react'
import { WhiteSpace, InputItem, WingBlank,Toast, Button, Checkbox } from 'antd-mobile';
import { Link } from 'react-router-dom';
import {reg,code} from '../../api/apis'
import './reg.scss'
// const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
export default class Reg extends Component {
state={
    phone:'',
    pwd:'',
    code:'',
    agree:false,

    oldacc:'',
    oldpwd:''

}
    render() {
        let {phone,pwd,code,agree}=this.state
        return (
            <div>
                <WhiteSpace size="lg" />
                <WingBlank>
                    <InputItem
                        placeholder="请输入手机"
                        clear
                        value={phone}
                        onChange={(val)=>{this.setState({phone:val})}}

                    />
                    <InputItem
                        placeholder="请输入密码"
                        clear
                        value={pwd}
                        onChange={(val)=>{this.setState({pwd:val})}}
                    />
                    <InputItem

                        placeholder="请输入验证码"
                        extra={<button className="codesss" onClick={this.codes}>获取验证码</button>}
                        value={code}
                        onChange={(val)=>{this.setState({code:val})}}
                    ></InputItem>
                    <AgreeItem data-seed="logId" checked={agree} onChange={e=> this.setState({agree:e.target.checked})
                    }>
                        我已同意 <a onClick={(e) => { e.preventDefault(); alert('agree it'); }}>《用户服务协议》及《隐私权政策》</a>
                    </AgreeItem>
                    <WhiteSpace size="lg" />
                    <Button onClick={this.regin} activeStyle={{ background: '#31B5AE' }} style={{ color: '#fff', background: '#45CCC6' }}>注册</Button>



                    <WhiteSpace size="lg" />
                    <Link to="/login">已有账号</Link>

                </WingBlank>

            </div>
        )
    }
    /* 获取验证码 */
    codes=async()=>{
        let req = await code()
        alert('验证码请不要告诉别人；你的验证码为：'+req.data)

      this.setState({
        code:req.data
      })
    //   return req.data;
        
    }
    /* 注册 */
    regin=async()=>{
        let acc=this.state.phone;
        let pwd=this.state.pwd;

        this.setState({
            oldacc:acc,
            oldpwd:pwd
        })
        if(this.state.oldacc===acc&&this.state.oldpwd===pwd) return
        
        if(this.state.code&&this.state.agree){
          let req= await reg(acc,pwd);
          if(req.data=='ok'){
              window.location='#/login'
          }else{
            Toast.fail('注册失败', 1);

          }
        
          
        }
    }
}
