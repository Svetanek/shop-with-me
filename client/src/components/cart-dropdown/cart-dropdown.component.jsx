import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from './cart-dropdown.styles.jsx';
// import './cart-dropdown.styles.scss';

export const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
// const mapStateToProps = state => ({
//   cartItems: state.cart.cartItems,
// });
// const mapStateToProps = ({cart: {cartItems}}) => ({
//   cartItems
// })
export default withRouter(connect(mapStateToProps)(CartDropdown));

//PREVIOUS CARTDROPDOWN

// export const CartDropdown = ({ cartItems, history, dispatch }) => (
// <div className="cart-dropdown">
//   <div className="cart-items">
//     {cartItems.length ? (
//       cartItems.map(cartItem => (
//         <CartItem key={cartItem.id} item={cartItem} />
//       ))
//     ) : (
//       <span className="empty-message">Your cart is empty</span>
//     )}
//   </div>
//   <Button
//     onClick={() => {
//       history.push('/checkout');
//       dispatch(toggleCartHidden());
//     }}
//   >
//     GO TO CHECKOUT
//   </Button>
// </div>
// )
