import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
class Header extends React.Component{
    render(){
        let {menu,black,login}=this.props
        return(<div className='header'>
            {login?  <Link to='/login' className='header-right iconfont icon-denglu'></Link>:''}
            {/* <Link to='/login' className='header-right iconfont icon-denglu'></Link> */}
            <span className='header-logo'>哈哈商城</span>
            {menu ?  <a href='javascript:;' className='header-left iconfont icon-kechengguanli'></a>:''}
            {/* <a href='javascript:;' className='header-left iconfont icon-caidan'></a> */}
            {/* <a href='javascript:;' className='header-left iconfont icon-htmal5icon37'></a> */}
            {black?<a href='javascript:;' className='header-left iconfont icon-htmal5icon37'></a>:''}
        </div>)
    }
}

export default Header