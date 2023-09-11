import { useState } from 'react'
import Header from './Components/Header'
import ProductView from './Components/ProductView'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ProductView />

    </>
  )
}

export default App
