import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import HomePage from './pages/homePage';
import ShopPage from './pages/shopPage';

const HatsPage = () => {
  return ( 
    <div>
      <h1>HATS PAGE</h1>
    </div>
   );
}

const JacketPage = () => {
  return ( 
    <div>
      <h1>JACKET PAGE</h1>
    </div>
   );
}

const App = () => {
    return (
      <div className='App'>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/shop/hats" component={HatsPage} />
          <Route exact path="/shop/jackets" component={JacketPage} />
        </Switch>
      </div>
    );
}

export default App;
