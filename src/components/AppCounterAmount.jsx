import { useRef, useState } from 'react'
import {deposit, withdraw} from '../store/amount/action'
import {connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        total: state.amountReducer.total
    }
}

function AppCounterAmount({total, deposit,withdraw}) {
  const [amount, setAmount] = useState("")

  const handleChange = (e) => setAmount(e.target.value)

  return (
    <div className="App">
      <h1>{total}</h1>
      <input type="number" value={amount} onChange={handleChange}/>
      <button onClick={() => deposit(+amount)}>add</button>
      <button onClick={() => withdraw(+amount)}>withdraw</button>
    </div>
  )
}
//        obtener algun valor del store | que va hacer la aplicacion
export default connect(mapStateToProps, {deposit,withdraw})(AppCounterAmount)
