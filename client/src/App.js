import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInSignUpPage from './pages/sign-in-up-page/sign-in-up-page.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component';
// import { setCurrentUser } from './redux/user/user.actions';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import { GlobalStyle } from './global.styles';

// put checkUserSession into the dependancy array since it's passed trough mapDispatchToProps
const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
          }
        />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

// to seed Firebase database:
//import { selectCollectionForView } from './redux/shop/shop.selectors';
//import { auth, createUserProfileDoc, addCollectionAndDocs} from './firebase/firebase.utils';

// VERSION I
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

// VERSION II
// unsubscribeFromAuth = null;
// componentDidMount() {

//   checkUserSession();

// this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
//   if (userAuth) {
//     const userRef = await createUserProfileDoc(userAuth);
//     //onSnapshot == similar to onAuthStateChanges
//     userRef.onSnapshot(snapshot => {
//       this.props.setCurrentUser({ id: snapshot.id, ...snapshot.data() });
//     });
//   } else {
//     this.props.setCurrentUser(userAuth);
//   }
// });
// }

// componentWillUnmount() {
//   this.unsubscribeFromAuth();
// }
