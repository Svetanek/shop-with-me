import React from 'react';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    <CollectionOverview />
  </div>
);

export default ShopPage;

// render() {
//   const { collections } = this.state;
//   return (
//     <div className="shop-page">
//       {collections.map(collection => (
//         <Collection key="collection.id" />
//       ))}
//     </div>
//   );
// }
