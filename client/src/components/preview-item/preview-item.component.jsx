import React from 'react';
import { connect } from 'react-redux';
// import Button from '../button/button.component';
import { addItem } from '../../redux/cart/cart.actions';
// import './preview-item.styles.scss';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from './preview-item.styles.jsx';

const Item = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};
// const Item = ({ item, addItem }) => {
//   return (
//     <div className="collection-item">
//       <div
//         className="image"
//         style={{ backgroundImage: `url(${item.imageUrl})` }}
//       />
//       <div className="collection-footer">
//         <span className="name">{item.name}</span>
//         <span className="price">{item.price}</span>
//       </div>
//       <Button onClick={() => addItem(item)} inverted>
//         Add to Cart
//       </Button>
//     </div>
//   );
// };

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(Item);
