import React from 'react';
import { hot } from 'react-hot-loader/root';

import Wrapper from '@/pages/chat-index';

class App extends React.Component {
  render() {
    return (
      <>
        <Wrapper />
      </>
    );
  }
}

export default hot(App);
