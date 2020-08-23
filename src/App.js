import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
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

const App = () => {
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
        </Switch>
      </div>
  );
}

// class App extends Component {

//   unSubscribeFromAuth = null;

//   componentDidMount(){
//     const {setCurrentUser} = this.props;

//     this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
//       if (userAuth){
//         const userRef = await createUserProfileDocument(userAuth);

//         userRef.onSnapshot(snapShot => {
//           this.props.setCurrentUser({
//               id: snapShot.id,
//               ...snapShot.data()
//           });
//         })

//         setCurrentUser(userAuth);
//       };
//     })
//   };

//   componentWillUnmount(){
//     this.unSubscribeFromAuth();
//   }

//   render() { 
//     return ( 
      
//     );
//   }
// }

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);