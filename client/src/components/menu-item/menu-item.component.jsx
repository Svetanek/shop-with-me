import React from 'react';
import { withRouter } from 'react-router-dom';
// import './menu-item.styles.scss';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './menu-item.styles';

const MenuItem = ({ title, image, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer className="background-image" imageUrl={image} />
    <ContentContainer className="content">
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

// const MenuItem = ({ title, image, size, history, linkUrl, match }) => {
//   const menuItemClass = size ? `${size} menu-item` : 'menu-item';
//   return (
//     <div
//       className={menuItemClass}
//       onClick={() => history.push(`${match.url}${linkUrl}`)}
//     >
//       <div
//         className="background-image"
//         style={{ backgroundImage: `url(${image})` }}
//       />
//       <div className="content">
//         <h1 className="title">{title.toUpperCase()}</h1>
//         <span className="subtitle">SHOP NOW</span>
//       </div>
//     </div>
//   );
// };

export default withRouter(MenuItem);
