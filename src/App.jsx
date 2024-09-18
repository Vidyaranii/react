import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import 'bootstrap/dist/css/bootstrap.min.css';

import Basic from './card/card';
import { Weather } from './weather/weather';
import ReduceExample from './hooks/usereducer';




function App() {
  const [count, setCount] = useState(0)


  
  return (
    <>
<ReduceExample/>

 </>
  )
}

export default App
