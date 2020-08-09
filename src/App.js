import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import HomePage from './pages/homePage';
import ShopPage from './pages/shopPage';
import SignInSignUpPage from './pages/signInSignUpPage';

import { auth } from './firebase/utils';

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

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    };
  };

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});

      console.log(user); 
    })
  };

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render() { 
    return ( 
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignInSignUpPage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/shop/hats" component={HatsPage} />
          <Route exact path="/shop/jackets" component={JacketPage} />
        </Switch>
      </div>
    );
  }
}
 
export default App;