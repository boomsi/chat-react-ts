import React from 'react';
import { hot } from 'react-hot-loader/root';

import png from './assets/404.png';

class App extends React.Component {
  render() {
    return (
      <>
        <img src={png} alt="" />
        <div className="imgg"></div>
      </>
    );
  }
}

export default hot(App);
