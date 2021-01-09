import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../providers/CartProvider';

const Item = ({item}) => {
  const [ quantity, setQuantity ] = useState(1)
  const [ total, setTotal ] = useState(null)

  const cartContext = useContext(CartContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    cartContext.addItemToCart(item, quantity)
  }

  useEffect(() => {
    let totaltmp = 0
    cartContext.cart.forEach(cartItem => {
      if (item.name === cartItem.name) {
        totaltmp += 1
      }
    })
    totaltmp && setTotal(totaltmp)

  }, [cartContext.cart, item.name])

 return(
    <div>
      {item.name} 
      <form onSubmit={handleSubmit}>
        <input placeholder="quantity" onChange={(e) => setQuantity(e.target.value)}></input>
        <button > Buy ${item.cost} </button>
      </form>
      {total && `Total ${item.name}s in Cart: ${total}`}
    </div>
  )
}

export default Item