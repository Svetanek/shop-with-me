import React from 'react';
import Item from '../preview-item/preview-item.component.jsx';
import './preview-collection.styles.scss';

const Collection = ({ title, items }) => (
  <div className="collection">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, id) => id < 4)
        .map(({ id, ...otherItemProps }) => (
          <Item key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);
export default Collection;
