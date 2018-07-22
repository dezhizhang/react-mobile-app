import React from 'react'
import './Detail.css'
class Detail extends React.Component{
    render(){
        return (<div>
            <dl className='detail'>
                <dt>哈哈商城特色</dt>
                <dd className='iconfont icon-zuanshi'>提供有趣品质好的商品</dd>
                <dd className='iconfont icon-jiaolian1'>我们只做最好的品质</dd>
                <dd className='iconfont icon-feiji'>哈哈有你，有我，做最好的哈哈</dd>
            </dl>
        </div>)
    }
}

export default Detail