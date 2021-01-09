import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../providers/CartProvider';

const Cart = () => {
  const cartContext = useContext(CartContext)
  const [total, setTotal] = useState(0)
  console.log("value from Context in Cart.js", cartContext.cart)

  const handleClick = (itemInCart) => {
    let filteredResults = cartContext.cart.filter(a => (
      a !== itemInCart
    ))

    cartContext.setCart(filteredResults)
  }

  useEffect(() => {
    let total = 0

    cartContext.cart.forEach(item => total += item.cost)

    setTotal(total)
    }, [cartContext])

  return(
    <div>
      This is what is in your cart
      {cartContext.cart.map((itemInCart, i) => (
        <li key={i}>
          {itemInCart.name} ${itemInCart.cost}
          <button onClick={() => handleClick(itemInCart)}>Remove from Cart</button>
        </li>
      ))}
      Total: {total}
    </div>
  )
}

export default Cart
