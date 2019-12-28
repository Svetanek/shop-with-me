import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collections-overview.styles.scss';
import { selectCollectionForView } from '../../redux/shop/shop.selectors';
import Collection from '../../components/preview-collection/preview-collection.component';

const CollectionsOverview = ({ collections }) => {
  console.log('coll=====', collections);
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <Collection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForView,
});
export default connect(mapStateToProps)(CollectionsOverview);
