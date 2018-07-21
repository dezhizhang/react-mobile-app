import React from 'react'
import {Link} from 'react-router-dom'
import './Menu.css'
class Menu extends React.Component{
    render(){
        return (<div className="menu">
            <Link to='/' className='iconfont icon-shouye'>首页</Link>
            <Link to='/course' className='iconfont icon-wenda'>课程安排</Link>
            <Link to='/teacher' className='iconfont icon-jiaolian1'>讲师团队</Link>
        </div>)
    }
}

export default Menu