import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import Cart from './components/Cart';

const App = () => {
  //some logic here which makes this a functional component
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
}

export default App;
