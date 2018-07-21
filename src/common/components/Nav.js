import React from 'react'
import './Nav.css'
let NavImg=[
    require('../img/1.jpg'),
    require('../img/2.jpg'),
    require('../img/3.jpg'),
    require('../img/4.jpg'),
    require('../img/5.jpg'),
    require('../img/6.jpg')

]

class Nav extends React.Component{
    render(){
        return (<div className='nav'>
            <ul className='nav-list'>
                {
                    NavImg.map((item,index)=>{
                        return (<li key={index}><img src={item}/></li>)
                    })
                }
            </ul>
            <ul  className='nav-bar'>
                {
                    NavImg.map((item,index)=>{
                        return (<span key={index} className={index===0 ? 'active':''}></span>)
                    })
                }
            </ul>
        </div>)
    }
}

export default Nav