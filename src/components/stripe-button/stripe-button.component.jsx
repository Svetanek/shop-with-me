import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceInCents = price * 100;
  const publishableKey = 'pk_test_6cK6c3cc70YIkRkdqxH2d8Q10052CeFnOC';
  const onToken = token => {
    console.log('TOKEN', token);
    alert('Payment Successful');
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

export default StripeCheckoutButton;
