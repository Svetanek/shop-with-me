import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getCollections } from '../../redux/shop/shop.actions';
import { selectCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import Spinner from '../../components/spinner/spinner.component';
import { ShopPageContainer } from './shop.styles';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
);
const CollectionPage = lazy(() => import('../collection/collection.component'));

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

export const ShopPage = ({ getCollections, match }, ...props) => {
  useEffect(() => {
    getCollections();
  }, [getCollections]);
  return (
    <ShopPageContainer>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => <CollectionPageWithSpinner {...props} />}
        />
      </Suspense>
    </ShopPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectCollectionFetching,
});
const mapDispatchToProps = dispatch => ({
  getCollections: () => dispatch(getCollections()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
