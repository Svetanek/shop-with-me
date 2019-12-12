// import pic_W from '../../images/sv.JPG';

const INITIAL_STATE = {
  sections: [
    {
      title: 'womens',
      imageUrl:
        'https://hips.hearstapps.com/wdy.h-cdn.co/assets/cm/15/09/768x516/54eba365d671a_-_trying-on-red-dress-xl.jpg?resize=480:*',
      size: 'large',
      id: 1,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
      size: 'large',
      id: 2,
      linkUrl: 'shop/mens',
    },
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
      id: 3,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 4,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'shoes',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 5,
      linkUrl: 'shop/shoes',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
