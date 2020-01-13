import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { firestore } from '../../firebase/firebase.utils';
import './collection.styles.scss';
import Item from '../../components/preview-item/preview-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => {
  useEffect(() => {
    console.log('I am subscribing');
    const unsubscribeFromCollection = firestore
      .collection('collections')
      .onSnapshot(snapshot => console.log(snapshot));
    return () => {
      console.log('I am unsubscribing');
      unsubscribeFromCollection();
    };
  }, []);
  const { title, items } = collection ? collection : { title: '', items: [] };
  return (
    <div className="collection-page">
      <h2 className="title" onClick={() => console.log('TITLE')}>
        {title}
      </h2>
      <div className="items">
        {items ? items.map(item => <Item key={item.id} item={item} />) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);

// const CollectionPage = ({ match }) => {
//   console.log('SHOPPAGE Match=', match.params.collectionId);
//   return (
//     <div className="collection-page">
//       <h2>CATEGORY PAGE</h2>
//     </div>
//   );
// };

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