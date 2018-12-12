import React from "react";
import ReactDOM from "react-dom";
// import { shallow } from "enzyme";
// components
import App from "../App";

describe("<App />", () => {
  describe("preloaded tests", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<App />, div);
    });
  });
});
