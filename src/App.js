import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import Home from './view/home/Home'
import Course from './view/course/Course'
import Login from './view/login/Login'
import Message from './view/message/Message'
import Teacher from './view/teacher/Teacher'
import Worker from './view/worker/Worker'
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/course' component={Course}/>
          <Route path='/login' component={Login}/>
          <Route path='/message' component={Message}/>
          <Route path='/teacher' component={Teacher}/>
          <Route path='/worker' component={Worker}/>
        </Switch>
      </div>
    );
  }
}

export default App;
