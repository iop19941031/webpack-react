import React from 'react'
import Scroxt from '../../component/scroxt'
import { Row, Col } from 'antd'
export default class July extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      href: 'https://www.xsteach.com/login?goto=https%3A%2F%2Fevent.xsteach.com%2Fjuly%2Findex', // 为登陆跳转链接
      staticResource: '/static/events/2019/708', // 静态资源地址
    }
  }
  render () {
    return (
      <div>
        <Row>
          <Col span={6} >我的奖品</Col>
          <Col span={12} >
            <Scroxt />
          </Col>
          <Col span={6} >抽奖规则</Col>
        </Row>
       </div>
    )
  }
}
