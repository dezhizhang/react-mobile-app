import React from 'react'
import Header from '../../common/components/Header'
import Menu from '../../common/components/Menu'
class Home extends React.Component{
    render(){
        return (<div>
           <Header
                login={true}
                menu={true}
           />
           <Menu/>
        </div>)
    }
}

export default Home