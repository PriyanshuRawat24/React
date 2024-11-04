import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(15)

  const addValue =  () => {
    setCount(prevCounter => prevCounter + 1)
  }

  const removeValue = () => {
    setCount( count-1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {count}</h2>

      <button
      onClick={addValue}
      >Add value {count}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {count}</button>
      <p>footer: {count}</p>
    </>
  )
}

export default App
