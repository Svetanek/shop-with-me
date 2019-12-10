import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collections-overview.styles.scss';
import selectShopCollections from '../../redux/shop/shop.selectors';
import Collection from '../../components/preview-collection/preview-collection.component';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <Collection key={id} {...otherCollectionProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});
export default connect(mapStateToProps)(CollectionsOverview);
