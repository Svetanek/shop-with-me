import React from 'react';
import shop_data from './shop.data';
import Collection from '../../components/preview-collection/preview-collection.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: shop_data,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <Collection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
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
