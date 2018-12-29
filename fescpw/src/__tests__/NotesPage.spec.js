import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

import NotesPage from '../components/NotesPage';

Enzyme.configure({ adapter: new Adapter() });

describe('<NotesPage />', () => {
  it('renders without crashing', () => {
    shallow(<NotesPage />);
  });
});