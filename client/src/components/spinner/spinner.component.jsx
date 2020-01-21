import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

const Spinner = ({ isLoading, ...otherProps }) => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);

export default Spinner;
