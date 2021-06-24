import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdrawAmount = val => {
    const {balance} = this.state
    if (balance > 0 && val <= balance) {
      this.setState(prevAmount => ({
        balance: prevAmount.balance - val,
      }))
    }
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="page-container">
        <div className="card-container">
          <div className="name-container">
            <p className="logo">S</p>
            <p className="name">Sai Kumar</p>
          </div>
          <div className="your-bal-container">
            <p className="balance-name">Your Balance</p>
            <div>
              <h1 className="balance-amount">{balance}</h1>
              <p className="balance-in-rupees">In Rupees</p>
            </div>
          </div>
          <h1 className="withdraw">Withdraw</h1>
          <h1 className="choose-sum">CHOOSE SUM (IN RUPEES)</h1>
          <ul className="unordered-list">
            {denominationsList.map(amount => (
              <DenominationItem
                key={amount.id}
                withdrawAmount={this.withdrawAmount}
                amount={amount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
