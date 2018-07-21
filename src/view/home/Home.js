import React from 'react'
import Header from '../../common/components/Header'
class Home extends React.Component{
    render(){
        return (<div>
           <Header
                login={true}
                menu={true}
           />
        </div>)
    }
}

export default Home