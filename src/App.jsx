import { useState } from 'react'
import Header from './Components/Header'
import ProductView from './Components/ProductView'
import ProductOverlay from './Components/ProductOverlay'
import './App.css'

function App() {
  const [visible, setVisibility] = useState(false)

  return (
    <div className='App'>
      <Header />
      <ProductView viewOverlay={() => setVisibility(prev => !prev)} />

      {visible ? <ProductOverlay viewOverlay={() => setVisibility(prev => !prev)} /> : null}


    </div>
  )
}

export default App
