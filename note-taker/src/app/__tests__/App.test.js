import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import toJSON from "enzyme-to-json";
describe("<App />", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
  it("contains a <SidebarContainer /> and <MainContentContainer />", () => {
    const app = shallow(<App />);
    const sidebar = app.find(".sidebar");
    const mainContentContainer = app.find(".main-content-container");
    expect(sidebar.length).toBe(1);
    expect(mainContentContainer.length).toBe(1);
  });
  it("<MainContentContainer></MainContentContainer> should have 4 <Route />", () => {
    const app = shallow(<App />);
    const mainContentContainer = app.find(".main-content-container");
    expect(mainContentContainer.find("Route").length).toBe(4);
  });
  it("checks every <Route /> to see if there is a path prop in <MainContentContainer></MainContentContainer>", () => {
    const app = shallow(<App />);
    const mainContentContainer = app.find(".main-content-container");
    mainContentContainer.find("Route").forEach(route => {
      expect(route.prop("path")).toBeDefined();
    });
  });

  it("matches the snapshot", () => {
    const tree = shallow(<App />);
    expect(toJSON(tree)).toMatchSnapshot();
  });
});
