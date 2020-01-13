import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, imageUrl, ...otherSectionProps }) => (
      <MenuItem key={id} image={imageUrl} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

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
// id is left because we change name of next prop to key, but for other props where names don't change, we may use {otherSectionProps}

export default connect(mapStateToProps)(Directory);

//'https://hips.hearstapps.com/wdy.h-cdn.co/assets/cm/15/09/768x516/54eba365d671a_-_trying-on-red-dress-xl.jpg?resize=480:*'
