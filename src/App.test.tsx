import App from './App'
import React from 'react';
import ReactDOM from 'react-dom';

describe('[App]', () => {
  it('Render correctly',() => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
