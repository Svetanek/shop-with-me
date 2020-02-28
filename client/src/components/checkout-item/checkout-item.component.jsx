import React from 'react';
import { connect } from 'react-redux';
import {
  deleteItem,
  addItem,
  decreaseItemsCount,
} from '../../redux/cart/cart.actions';
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  DeleteButtonContainer,
} from './checkout-item.styles';
// import './checkout-item.styles.scss';

export const CheckoutItem = ({
  cartItem,
  deleteItem,
  addItem,
  decreaseCount,
}) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => decreaseCount(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <DeleteButtonContainer onClick={() => deleteItem(cartItem)}>
        &#10005;
      </DeleteButtonContainer>
    </CheckoutItemContainer>
    // <div className="checkout-item">
    //   <div className="image-container">
    //     <img src={imageUrl} alt="item" />
    //   </div>
    //   <span className="name">{name}</span>
    //   <span className="quantity">
    //     <div className="arrow" onClick={() => decreaseCount(cartItem)}>
    //       &#10094;
    //     </div>
    //     <span className="value"> {quantity}</span>
    //     <div className="arrow" onClick={() => addItem(cartItem)}>
    //       &#10095;
    //     </div>
    //   </span>

    //   <span className="price">{price}</span>
    //   <div className="remove-button" onClick={() => deleteItem(cartItem)}>
    //     &#10005;
    //   </div>
    // </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteItem: item => dispatch(deleteItem(item)),
  addItem: item => dispatch(addItem(item)),
  decreaseCount: item => dispatch(decreaseItemsCount(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
