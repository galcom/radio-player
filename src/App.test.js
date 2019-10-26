import React from 'react';
import ReactDOM from 'react-dom';
import test from './test';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<test />, div);
  ReactDOM.unmountComponentAtNode(div);
});

