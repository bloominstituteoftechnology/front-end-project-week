import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

import Note from '../components/Note';

Enzyme.configure({ adapter: new Adapter() });

const props = {
    redirectForm : jest.fn(),
    notes_fetching : Boolean,
    notes_fetched : Boolean,
    notes_array : [],
    note : {},
}

describe('<Note />', () => {
  it('renders without crashing', () => {
    shallow(<Note {...props} />);
  });
  it('should return defined', () => {
    const wrapper = mount(<Note {...props} />);
    wrapper.setProps({ note : { "title" : "Title", "textBody" : "textBody", "tags" : "tags" } });
    
    expect(wrapper.props().note).toBeDefined();
  });
});