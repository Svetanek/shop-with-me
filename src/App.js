import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInSignUpPage from './pages/sign-in-up-page/sign-in-up-page.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component';
import { auth, createUserProfileDoc } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    // const { setCurrentUser, collectionsArray } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        //onSnapshot == similar to onAuthStateChanges
        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
      console.log('AUTH', userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInSignUpPage />
              )
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
// EQUAL TO const mapStateToProps = ({ user }) => ({ currentUser: user.currentUser });
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// to seed Firebase database:
//import { selectCollectionForView } from './redux/shop/shop.selectors';
//import { auth, createUserProfileDoc, addCollectionAndDocs} from './firebase/firebase.utils';

// componentDidMount() {
//   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
//     if (userAuth) {
//       const userRef = await createUserProfileDoc(userAuth);
//       userRef.onSnapshot(snapshot => {
//         this.props.setCurrentUser({ id: snapshot.id, ...snapshot.data() });
//       });
//     } else {
//       this.props.setCurrentUser(userAuth);

// ****LOOK HERE****
//       addCollectionAndDocs(
//         'collections',
//         this.props.collectionsArray.map(({ title, items }) => ({
//           title,
//           items,
//         }))
//       );
//     }
//   });
// }

//const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
//**** LOOK HERE****
//   collectionsArray: selectCollectionForView,
// });
