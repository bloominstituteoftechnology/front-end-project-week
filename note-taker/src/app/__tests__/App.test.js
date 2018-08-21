import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

it('renders without crashing', () => {
  shallow(<App />);
});
it('contains a <SidebarContainer /> and <MainContentContainer />', () => {
    const app = shallow(<App></App>);
    const sidebar = app.find('.sidebar')
    const mainContentContainer = app.find('.main-content-container');
    expect(sidebar.length).toBe(1);
    expect(mainContentContainer.length).toBe(1);
});
it('<MainContentContainer /> should have 4 <Route></Route>', () => {
    const app = shallow(<App />);
    const mainContentContainer = app.find('.main-content-container');
    expect(mainContentContainer.find('Route').length).toBe(4);
});