import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



import FakeProducts from '../table/task'

function App() {
  const [count, setCount] = useState(0)


  
  return (
    <>
<FakeProducts/>
 </>
  )
}

export default App
