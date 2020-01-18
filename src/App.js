import React, { Component } from 'react'
// import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import {HashRouter,Route,Switch} from 'react-router-dom';
import Nav from './pages/nav/Nav'
import Login from './pages/login//Login'
import Reg from './pages/reg/Reg'
import Forget from './pages/forget/Forget'
import Ctiy from './pages/city/Ctiy'
import Sreach from './pages/sreach/Sreach'
import Mapp from './pages/map/Mapp'

export default class App extends Component {
  render() {
    return (
      <div style={{height:'100%'}}> 
         <HashRouter>
           <Switch>
              <Route exact path='/' component={Nav}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/reg' component={Reg}/>
              <Route exact path='/forget' component={Forget}/>

              <Route exact path='/city' component={Ctiy}/>
              <Route exact path='/sreach' component={Sreach}/>
              <Route exact path='/map' component={Mapp}/>
           
           </Switch>
         </HashRouter>
      </div>
    )
  }
}
