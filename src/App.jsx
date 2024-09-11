import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




import BulbTask from './bulbtask/bulb'

function App() {
  const [count, setCount] = useState(0)


  
  return (
    <>
<BulbTask/>
 </>
  )
}

export default App
