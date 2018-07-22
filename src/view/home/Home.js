import React from 'react'
import Header from '../../common/components/Header'
import Menu from '../../common/components/Menu'
import Nav from '../../common/components/Nav'
import Content from './components/Content'
import Detail from './components/Detail'
class Home extends React.Component{
    render(){
        return (<div>
           <Header
                login={true}
                menu={true}
           />
           <Nav/>
           <Content/>
           <Detail/>
        </div>)
    }
}

export default Home