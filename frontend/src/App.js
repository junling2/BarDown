import {BrowserRouter, Route} from 'react-router-dom'; 
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">Bar Down</a>
        </div>
        <div>
          <a href="/myaccount">My account</a>
          <a href="/cart">Cart</a>
        </div>
      </header>
      <main>
        <Route path='/cart/:id?' component={CartScreen}></Route>
        <Route path='/product/:id' component={ProductScreen}></Route>
        <Route path='/' component={HomeScreen} exact></Route>
      </main>
      <footer className="row center">All Rights Reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
