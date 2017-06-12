import React, { Component } from 'react';
import { render } from 'react-dom';

import TestComponent from './js/components/TestComponent.js';

class App extends Component {
  render () {
    return(
      <div>
        <TestComponent user={`TestUser`} />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
