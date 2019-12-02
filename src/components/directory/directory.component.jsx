import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import pic_W from '../../images/20140515_131456.jpg';
import pic_K from '../../images/IMG_4163.JPG';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats',
        },
        {
          title: 'jackets',
          imageUrl: pic_K,
          id: 2,
          linkUrl: 'shop/jackets',
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers',
        },
        {
          title: 'womens',
          imageUrl: pic_W,
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens',
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens',
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, imageUrl, ...otherSectionProps }) => (
          <MenuItem key={id} image={imageUrl} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

// equivalent to:  <div className="directory-menu">
//   {this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
//     <MenuItem
//       key={id}
//       title={title}
//       image={imageUrl}
//       size={size}
//       linkUrl={linkUrl}
//     />
//   ))}
// </div>
// id is left becsue we change name of next prop to key, but for other props where names don't change, we may use {otherSectionProps}

export default Directory;

//'https://hips.hearstapps.com/wdy.h-cdn.co/assets/cm/15/09/768x516/54eba365d671a_-_trying-on-red-dress-xl.jpg?resize=480:*'
