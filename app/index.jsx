import React, { Component } from 'react';
import { render } from 'react-dom';

import TestComponent from './js/components/TestComponent.jsx';

class App extends Component {
  render () {
    return(
      <div>
        <TestComponent user={`Maddy`} />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
