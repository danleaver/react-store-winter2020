import { createContext, useState } from 'react';

export const CartContext = createContext()

const CartProvider = (props) => {
  const [ cart, setCart ] = useState([])
  const [ id, setId ] = useState(0)

  const addItemToCart = (item, quantity) => {
    let newItems = []
    let tmpId = id

    let q = parseInt(quantity)
    let arr = [...Array(q)]
    
    arr.forEach(_ => {
      newItems.push({id: tmpId, ...item})
      tmpId ++
    })

    setCart([...newItems, ...cart])
    setId(tmpId)
  }

  return (
    <CartContext.Provider value={{
      cart,
      addItemToCart,
      setCart,
    }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider