import React from 'react'
import { connect } from 'react-redux'
import Action from './action'

import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom'
import Links from '../router/links'
import indexScss from '../router/index.scss'
import { linkConfig } from '../router/links-config'
import NoMatch from '../router/no-match/index'
function Store(props) {
  return (
    <div>
      <div>
        <HashRouter>
          <div>
            <ul className={indexScss.ul}>
              {linkConfig.map((route, id) => (
                <Links key={id} {...route} />
              ))}
            </ul>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/dddd' exact component={WillMatch} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </HashRouter>
      </div>
      <div>
        <h2>当月工资为{props.tiger}</h2>
        <h2>当月工资为{props.ff}</h2>
        <button onClick={props.handlePayIncrease}>升职加薪</button>
        <button onClick={props.handlePayDecrease}>迟到罚款</button>
      </div>
    </div>
  )
}

// 需要触发什么行为
function mapDispatchToProps(dispatch) {
  const action = new Action()
  return {
    handlePayIncrease: () => dispatch({ type: action.increase() }),
    handlePayDecrease: () => dispatch({ type: action.decrease() })
  }
}

function mapStateToProps(state) {
  return {
    tiger: state.tiger,
    ff: state.ff
  }
}

/**
 mapStateToProps(state, ownProps) 方法允许我们将store中的数据作为props绑定到组件中，
 只要store更新了就会调用mapStateToProps方法，mapStateToProps返回的结果必须是object对象，该对象中的值将会更新到组件中，
 */
/**
 * mapDispatchToProps(dispatch, [ownProps]) 第二个参数允许我们将action作为props绑定到组件中，
 * mapDispatchToProps希望你返回包含对应action的object对象
 */
// 需要渲染什么数据
export default connect(mapStateToProps, mapDispatchToProps)(Store)
function WillMatch() {
  return <h3>Matched!</h3>
}
function Home() {
  return (
    <p>
      A <code>&lt;Switch></code> renders the first child <code>&lt;Route></code>{' '}
      that matches. A <code>&lt;Route></code> with no <code>path</code> always
      matches.
    </p>
  )
}
