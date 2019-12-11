import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]
  );

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// };

// export const selectCollection = collectionUrlParam =>
//   createSelector([selectShopCollections], collections =>
//     collections.find(
//       collection =>
//         collection[collectionUrlParam] === COLLECTION_ID_MAP[collectionUrlParam]
//     )
//   );
