import { useState } from 'react'
import './App.css'

function App() {
  let [data, setData] = useState(0);

  function increaseVal(){
    setData((data) => data + 1);
  }
  function decreaseVal(){
    setData((data) => data - 1);
  }

  return (
    <>
      <h1>Counter</h1>
      <button onClick={increaseVal}>Increase</button>
      <h2>{data}</h2>
      <button onClick={decreaseVal}>Decrease</button>
    </>
  )
}

export default App
