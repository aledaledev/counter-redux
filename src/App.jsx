import { useRef, useState } from 'react'

function App() {
  const [total, setTotal] = useState(0)
  const [amount, setAmount] = useState("")

  const handleAdd = () => {
    setTotal(total + amount)
    setAmount("")
  }

  const handleWidthdraw = () => {
    setTotal(total - amount)
    useState("")
  }

  const handleChange = (e) => setAmount(+e.target.value)

  return (
    <div className="App">
      <h1>{total}</h1>
      <input type="number" value={amount} onChange={handleChange}/>
      <button onClick={handleAdd}>add</button>
      <button onClick={handleWidthdraw}>withdraw</button>
    </div>
  )
}

export default App
