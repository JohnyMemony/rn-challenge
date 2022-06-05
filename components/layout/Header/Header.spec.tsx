import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from './Header';

test('renders header correctly', () => {
  const tree = renderer.create(<Header title="Test" actions={(<></>)} />).toJSON();

  expect(tree).toMatchSnapshot();
});
