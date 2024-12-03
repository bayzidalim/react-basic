import { useState } from 'react'
import './App.css'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hi, This is Bayzid</h1>
      <Users></Users>
      <Friends></Friends>
    </>
  )
}

export default App
