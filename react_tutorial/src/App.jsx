import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MemoExample from './Components/MemoExample'
import StateAndPropsCombinedExample from './Components/StateAndPropsCombinedExample'
import CheckBoxTut from './Components/CheckBoxTut'
import CounterTut from './Components/CounterTut'
import CounterInterval from './Components/CounterInterval'

function App() {
  const [count, setCount] = useState(0)
   
  return (
    <>
     {/* <MemoExample/> */}
     {/* <StateAndPropsCombinedExample/> */}
     {/* <CheckBoxTut /> */}
     {/* <CounterTut /> */}
     <CounterInterval />
    </>
  )
}

export default App
