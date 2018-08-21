import React from 'react';
import { shallow } from 'enzyme';
import CreateNoteComponent from '../CreateNoteComponent';

it('renders without crashing', () => {
  shallow(<CreateNoteComponent />);
});