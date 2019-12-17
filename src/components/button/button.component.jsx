import React from 'react';
import { ButtonContainer } from './button.styles.jsx';

const Button = ({ children, ...props }) => (
  <ButtonContainer {...props}>{children}</ButtonContainer>
);

export default Button;
