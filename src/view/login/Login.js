import React from 'react';
import Header from '../../common/components/Header';
import './Login.css'
class Login extends React.Component{
    render(){
        return (<div className='login'>
          <Header
           black={true}
          />
          <div className='login-wrap'>
            <h2 className='login-title'>登录/注册</h2>
          </div>
          <div className='login-enter'>
            <div className='login-3d'>
              <div className='login-inner login-form'>登录</div>
              <div className='login-inner regest-form'>注册</div>
            </div>
          </div>
        </div>)
    }
}

export default Login
