import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { gettingCollections } from '../../redux/shop/shop.actions';
import { selectCollectionFetching } from '../../redux/shop/shop.selectors';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollections } = this.props;
    fetchCollections();
  }

  render() {
    const { match } = this.props;

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
  }
}
const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectCollectionFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(gettingCollections()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

// alternative to onSnapshot (in componentDidMount) is promise... but without live update like observable pattern onSnapshot
//   collectionRef.get()
//  .then(snapshot => {
//   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//   updateCollections(collectionsMap);
//   this.setState({ loading: false });
// });

//
// fetch('https://firestore.googleapis.com/v1/projects/shop-db-44779/databases/(default)/documents/collections').then(response.json()).then(collections => console.log('Collections', collections))

//WITHSPINNER
// import WithSpinner from '../../components/with-spinner/with-spinner.component';

// const CollectionPageWithSpinner = WithSpinner(CollectionPage)

// <Route
// path={`${match.path}/:collectionId`}
// render={props => (
//   <CollectionPageWithSpinner
//     isLoading={!collectionsLoaded}
//     {...props}
//   />
// )}
// />
