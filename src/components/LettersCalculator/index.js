import {Component} from 'react'
import './index.css'

class LetterCalculator extends Component {
  state = {count: 0}

  countAll = event => {
    const {count} = this.state
    if (event.target.value !== '') {
      this.setState(prevState => ({count: prevState.count + 1}))
    } else {
      this.setState(prevState => ({count: 0}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="main">
        <div className="card">
          <div className="content-cont">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="find" className="desc">
              Enter the phrase
            </label>
            <input
              id="find"
              onChange={this.countAll}
              placeholder="Enter the phrase"
              type="text"
              className="inputEle"
            />
            <p className="countEle">No.of letters: {count}</p>
          </div>
          <div>
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LetterCalculator
