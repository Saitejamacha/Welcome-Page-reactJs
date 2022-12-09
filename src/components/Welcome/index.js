import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  subscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonContent = this.getButtonText()

    return (
      <div className="bg-con">
        <h1 className="head">Welcome</h1>
        <p className="para">Thank You! Happy Learning </p>
        <button onClick={this.subscribe} className="btn" type="button">
          {buttonContent}
        </button>
      </div>
    )
  }
}

export default Welcome
