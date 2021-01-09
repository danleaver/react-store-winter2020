import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../providers/CartProvider';

const Item = ({item}) => {
  const [ quantity, setQuantity ] = useState(1)

  const cartContext = useContext(CartContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    cartContext.addItemToCart(item, quantity)
  }

  
 return(
    <div>
      {item.name} 
      <form onSubmit={handleSubmit}>
        <input placeholder="quantity" onChange={(e) => setQuantity(e.target.value)}></input>
        <button > Buy ${item.cost} </button>
      </form>
    </div>
  )
}

export default Item