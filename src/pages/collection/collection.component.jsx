import React from 'react';
import { connect } from 'react-redux';
import './collection.styles.scss';
import PreviewItem from '../../components/preview-item/preview-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  console.log('SHOPPAGE Match=', collection);
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <PreviewItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// const CollectionPage = ({ match }) => {
//   console.log('SHOPPAGE Match=', match.params.collectionId);
//   return (
//     <div className="collection-page">
//       <h2>CATEGORY PAGE</h2>
//     </div>
//   );
// };

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);

//ownProps = props received through Route on shop.component => ownProps.match.params
// and second argument (state) is needed because there is a nested fuction inside of selectCollection that needs that second argument => Currying concept

// const CollectionPage = ({ match }) => {
//   console.log('SHOPGAPE Match=', match.params.collectionId);
//   return (
//     <div className="collection-page">
//       <h2>CATEGORY PAGE</h2>
//     </div>
//   );
// };
