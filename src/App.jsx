import { useState } from 'react'
import Header from './Components/Header'
import ProductView from './Components/ProductView'
import ProductOverlay from './Components/ProductOverlay'
import './App.css'
import './queries.css'

function App() {
  const [visible, setVisibility] = useState(false)
  const [cartItems, setCartItems] = useState([])
  function addCart(newItem) {
    setCartItems((prev) => {
      return [...prev, newItem]
    })
  }
  function deleteItem(item) {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id))
  }

  return (
    <div className='App'>
      <Header deleteItem={deleteItem} cartItems={cartItems} />
      <ProductView addCart={addCart} viewOverlay={() => setVisibility(prev => !prev)} />

      {visible ? <ProductOverlay viewOverlay={() => setVisibility(prev => !prev)} /> : null}
    </div>
  )
}

export default App
