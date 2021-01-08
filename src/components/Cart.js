import { useContext } from 'react';
import { CartContext } from '../providers/CartProvider';

const Cart = () => {
  const cartContext = useContext(CartContext)
  console.log("value from Context in Cart.js", cartContext.cart)

  return(
    <div>
      Hello Cart Page
    </div>
  )
}

export default Cart
