import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearCart } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price, history, clearCart }) => {
  const priceInCents = price * 100;
  const publishableKey = 'pk_test_6cK6c3cc70YIkRkdqxH2d8Q10052CeFnOC';
  const onToken = token => {
    clearCart();
    alert('Payment Successful');
    history.push('/');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="SHOP WITH US"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart()),
});

export default withRouter(
  connect(null, mapDispatchToProps)(StripeCheckoutButton)
);
