import './index.css'

const DenominationItem = props => {
  const {amount, withdrawAmount} = props
  const withdraw = () => {
    withdrawAmount(amount.value)
  }
  return (
    <li className="button-container">
      <button type="button" className="button" onClick={withdraw}>
        {amount.value}
      </button>
    </li>
  )
}

export default DenominationItem
