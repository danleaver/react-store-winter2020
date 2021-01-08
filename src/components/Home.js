import { useContext } from 'react';
import { CartContext } from '../providers/CartProvider';

const items = [
  {name: "Frisbee", cost: 8},
  {name: "Chuck-It", cost: 5},
  {name: "Football", cost: 12}
]

const Home = () => {
  const cartContext = useContext(CartContext)

  console.log("value from cartContext in Home", cartContext.cart)
  return(
    <>
      <div>
        Welcome to the Pet Store brought to you by React
      </div>
      {items.map((item, i) => (
        <li key={i}>
          {item.name} <button> Buy ${item.cost}</button>
        </li>
      ))}
    </>
  )
}

export default Home
