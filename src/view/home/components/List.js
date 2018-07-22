import React from 'react';
import { Link } from 'react-router-dom'
import uuid from 'uuid';
import './List.css';
let listImg=[
    {id:uuid(),title:'时光唱片机',num:'200',desc:'300',img:require('../img/1.jpg')},
    {id:uuid(),title:'美好未来',num:'300',desc:'1000',img:require('../img/2.jpg')},
    {id:uuid(),title:'相信自己',num:'400',desc:'100',img:require('../img/3.jpg')},
    {id:uuid(),title:'美好中国',num:'500',desc:'200',img:require('../img/4.jpg')}
    
]
class List extends React.Component{
    render(){
        console.log(listImg);

        return (<div>
           <div className='list'>
               <h2 className='title'>学员作品</h2>
               <ul>
               {
                   listImg.map((item,index)=>{
                       return (
                       <Link to='/worker' key={item.id}>
                            <li key={index}  className='list-image'>
                                <img src={item.img}/>
                                <h5 className='descript'>{item.title}</h5>
                                
                            </li>
                       </Link>
                    )
                   })
               }
               </ul>
           </div>
        </div>)
    }
}

export default List
