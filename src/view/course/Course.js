import React from 'react'
import Header from '../../common/components/Header'
import Footer from '../../common/components/Header'

class Course extends React.Component{
    render(){
        return (<div>
           <Header
                login={true}
                menu={true}
           />
           <Footer/>
        </div>)
    }
}

export default Course;
