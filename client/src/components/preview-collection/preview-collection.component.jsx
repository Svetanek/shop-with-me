import React from 'react';
import { withRouter } from 'react-router-dom';
import Item from '../preview-item/preview-item.component.jsx';
import './preview-collection.styles.scss';

const Collection = ({ title, items, history, match, routName }) => {
  return (
    <div className="collection">
      <h1
        className="title"
        onClick={() => {
          history.push(`${match.path}/${routName}`);
        }}
      >
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((item, id) => id < 4)
          .map(item => (
            <Item key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};
export default withRouter(Collection);

// const Collection = ({ title, items }) => (
//   <div className="collection">
//     <h1 className="title">{title.toUpperCase()}</h1>
//     <div className="preview">
//       {items
//         .filter((item, id) => id < 4)
//         .map(({ id, ...otherItemProps }) => (
//           <Item key={id} {...otherItemProps} />
//         ))}
//     </div>
//   </div>
// );
