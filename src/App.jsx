import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import 'bootstrap/dist/css/bootstrap.min.css';
import CardTask from './card/addcard';



function App() {
  const [count, setCount] = useState(0)


  
  return (
    <>
<CardTask/>

 </>
  )
}

export default App
