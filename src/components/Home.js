
import Item from './Item';

const items = [
  {name: "Frisbee", cost: 8},
  {name: "Chuck-It", cost: 5},
  {name: "Football", cost: 12}
]

const Home = () => (
  <>
    <div>
      Welcome to the Pet Store brought to you by React
    </div>
    {items.map((item, i) => (
      <li key={i}>
        <Item item={item} />
      </li>
    ))}
  </>
)


export default Home
