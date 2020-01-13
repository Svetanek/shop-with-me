import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getCollections } from '../../redux/shop/shop.actions';
// import { gettingCollections } from '../../redux/shop/shop.actions';
import { selectCollectionFetching } from '../../redux/shop/shop.selectors';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ getCollections, match }, ...props) => {
  useEffect(() => {
    getCollections();
  }, [getCollections]);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => <CollectionPageWithSpinner {...props} />}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectCollectionFetching,
});
const mapDispatchToProps = dispatch => ({
  getCollections: () => dispatch(getCollections()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

// unsubscribeFromSnapshot = null;

// componentDidMount() {
//   const { getCollections } = this.props;
//   getCollections();
// }
