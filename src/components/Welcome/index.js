// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  btnText = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getBtnText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const btnText = this.getBtnText()
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="desc">Thank you! Happy Learning</p>
        <button className="btn" onClick={this.btnText}>
          {btnText}
        </button>
      </div>
    )
  }
}

export default Welcome
