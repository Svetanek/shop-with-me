import React from 'react';
import { withRouter } from 'react-router-dom';
import Item from '../preview-item/preview-item.component.jsx';
import {
  CollectionContainer,
  TitleContainer,
  PreviewContainer,
} from './preview-collection.styles.jsx';

export const Collection = ({ title, items, history, match, routeName }) => (
  <CollectionContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <Item key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionContainer>
);
export default withRouter(Collection);
