export const addItemToCart = (cartItems, itemToAdd) => {
  const itemExist = cartItems.find(cartItem => cartItem.id === itemToAdd.id);
  if (itemExist) {
    return cartItems.map(item =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

// export const addItemToCart = (cartItems, itemToAdd) => {
//   const itemExist = cartItems.find(item => item.id === itemToAdd.id);
//   if (itemExist) {
//     return cartItems.map(item => {
//       if (item.id === itemToAdd.id) {
//         item.quantity = item.quantity + 1;
//       }

//       return item;
//     });
//   } else {
//     itemToAdd.quantity = 1;
//     cartItems.push(itemToAdd);
//     return cartItems;
//   }
// };
