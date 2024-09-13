import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonList from './tasks/buttontask';



function App() {
  const [count, setCount] = useState(0)


  
  return (
    <>
<ButtonList/>

 </>
  )
}

export default App
