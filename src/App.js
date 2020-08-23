import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/homePage';
import ShopPage from './pages/shop';
import SignInSignUpPage from './pages/signInSignUp';
import CheckoutPage from './pages/checkout';
import { auth, createUserProfileDocument } from './firebase/utils';
import { setCurrentUser } from './redux/user/userAction';
import { selectCurrentUser } from './redux/user/userSelector';

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
  const {setCurrentUser/*collectionsArray*/} = this.props;

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
        // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})));
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
          <Route exact path="/signin" render={() => 
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInSignUpPage />
              )} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/shop/hats" component={HatsPage} />
          <Route exact path="/shop/jackets" component={JacketPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionForPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);