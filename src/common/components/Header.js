import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
class Header extends React.Component{
    render(){
        return(<div className='header'>
            <Link to='/login' className='header-right'></Link>
            <span className='header-logo'>好利来科技</span>
            <a href='javascript:;' className='header-left'></a>
            <a href='javascript:;' className='header-left'></a>
        </div>)
    }
}

export default Header