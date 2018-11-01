import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

import NotesForm from '../components/NotesForm';

Enzyme.configure({ adapter: new Adapter() });

const props = {
    note : {},
    notes_editing : Boolean,
    handleChange : jest.fn(),
    handleCreate : jest.fn(),
    handleEdit : jest.fn()
}

describe('<NotesForm />', () => {
  it('renders without crashing', () => {
    shallow(<NotesForm {...props} />);
  });
});