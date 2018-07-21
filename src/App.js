import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import Home from './view/home/Home'
import Course from './view/course/Course'
import Login from './view/login/Login'
import Message from './view/message/Message'
import Teacher from './view/teacher/Teacher'
import Worker from './view/worker/Worker'
import './common/css/style.css'
import './common/css/iconfont.css'
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/course' component={Course} exact/>
          <Route path='/login' component={Login} exact/>
          <Route path='/message' component={Message} exact/>
          <Route path='/teacher' component={Teacher} exact/>
          <Route path='/worker' component={Worker} exact/>
        </Switch>
      </div>
    );
  }
}

export default App;
