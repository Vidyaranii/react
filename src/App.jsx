import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import 'bootstrap/dist/css/bootstrap.min.css';


import SeeMore from './foodrecipes/recipe';

function App() {
  const [count, setCount] = useState(0)


  
  return (
    <>
<SeeMore/>

 </>
  )
}

export default App
