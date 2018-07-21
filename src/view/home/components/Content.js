import React from 'react'
import './Content.css'
let homeImg=[
    require('../img/1.jpg'),
    require('../img/2.jpg'),
    require('../img/3.jpg'),
    require('../img/4.jpg'),
    require('../img/5.jpg'),
    require('../img/6.jpg'),
    require('../img/7.jpg'),
    require('../img/8.jpg'),
    require('../img/9.jpg'),
    require('../img/10.jpg'),
    
]

class Content extends React.Component{
    render(){
        return (<div className='content'>
          <div className='content-wrap'>
            <ul className='content-list'>
                {
                    homeImg.map((item,index)=>{
                        return (
                            
                                <li key={index}>
                                    <img src={item}/>
                                    <a href="javascript:;">点击购买</a>
                                </li>
                                
                           
                    )
                    })
                    
                }
            </ul>
          </div>
        </div>)
    }
}

export default Content