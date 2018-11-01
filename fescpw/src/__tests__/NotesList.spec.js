import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

import NotesList from '../components/NotesList';

Enzyme.configure({ adapter: new Adapter() });

describe('<NotesList />', () => {
  it('renders without crashing', () => {
    shallow(<NotesList />);
  });
});