import React from 'react'
import { connect } from 'react-redux'

import Action from './action'
class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      PayIncrease: this.props.PayIncrease,
      PayDecrease: this.props.PayDecrease
    }
  }
  render () {
    return (
      <div className="App">
        <div className="App">
          <h2>当月工资为{this.props.tiger}</h2>
          <h2>当月工资为{this.props.ff}</h2>
          <button onClick={this.state.PayIncrease}>升职加薪</button>
          <button onClick={this.state.PayDecrease}>迟到罚款</button>
        </div>
      </div>
    )
  }
}

// 需要触发什么行为
function mapDispatchToProps (dispatch) {
  const action = new Action()
  return {
    PayIncrease: () => dispatch({ type: action.increase() }),
    PayDecrease: () => dispatch({ type: action.decrease() })
  }
}

function mapStateToProps (state) {
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
App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App
