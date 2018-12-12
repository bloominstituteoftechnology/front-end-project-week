import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
// components
import AllNotes from "../components/notes/AllNotes.js";
import App from "../App.js";

describe("<AllNotes />", () => {
  describe("preloaded tests", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<AllNotes />, div);
    });
  });
  describe("initial prop check", () => {});
  describe("function checks", () => {
    it("click takes to single note", () => {
      const appWrapper = mount(<App />);
      appWrapper
        .find("a")
        .at(12)
        .simulate("click");
      let button = appWrapper
        .find("SingleNote")
        .filterWhere(item => item.prop("id") === "1");
      button.forEach(x => console.log(x.debug()));
      expect(appWrapper.state().next).toEqual("1");
    });
  });
});
