import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/homePage';
import ShopPage from './pages/shopPage';
import SignInSignUpPage from './pages/signInSignUpPage';

import { auth, createUserProfileDocument } from './firebase/utils';
import { setCurrentUser } from './redux/user/userAction';

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

  unSubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        })

        setCurrentUser(userAuth);
      };
    })
  };

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render() { 
    return ( 
      <div className='App'>
        <Header />
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
const mapDispatchToProps  = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null, 
  mapDispatchToProps
)(App);