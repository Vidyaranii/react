import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import 'bootstrap/dist/css/bootstrap.min.css';

import Basic from './card/card';




function App() {
  const [count, setCount] = useState(0)


  
  return (
    <>
<Basic/>

 </>
  )
}

export default App
