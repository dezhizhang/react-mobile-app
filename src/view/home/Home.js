import React from 'react'
import Header from '../../common/components/Header'
import Menu from '../../common/components/Menu'
import Nav from '../../common/components/Nav'
class Home extends React.Component{
    render(){
        return (<div>
           <Header
                login={true}
                menu={true}
           />
           <Nav/>
          
        </div>)
    }
}

export default Home