import React from 'react'
import Header from '../../common/components/Header'
import Menu from '../../common/components/Menu'
import Nav from '../../common/components/Nav'
import Content from './components/Content'
class Home extends React.Component{
    render(){
        return (<div>
           <Header
                login={true}
                menu={true}
           />
           <Nav/>
           <Content/>
        </div>)
    }
}

export default Home