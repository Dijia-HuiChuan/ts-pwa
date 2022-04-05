import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [count, setCount] = useState(0)
  const handleGet = () => {
    console.log('1111')
    fetch('https://my-typescript-worker.ttc10161025282672.workers.dev')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        console.log(res.data.age)
        setCount(res.data.age)
      })
  }
  useEffect(() => {
    fetch('https://my-typescript-worker.ttc10161025282672.workers.dev')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        console.log(res.data.age)
        setCount(res.data.age)
      })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <span className="getjson" onClick={handleGet}>
          获取数据{count}
        </span>
      </header>
    </div>
  )
}
export default App
