import React from 'react';
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './error.boundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false,
    };
  }
  static getDerivedStateFromError(error) {
    //process the error if any of wrapped children throw error
    return { hasErrored: true };
  }
  //gets the info about the error and how the error got through
  componentDidCatch(error) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/oCkEbrA.png" />
          <ErrorImageText>This page is gone with the wind</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    //if error is false return children
    return this.props.children;
  }
}

export default ErrorBoundary;
