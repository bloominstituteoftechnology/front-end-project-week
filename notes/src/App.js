import React from "react";
import PostApp from "./PostApp";
import Authenticate from "./Authentication/Authenticate";

const App = () => <PostApp />;

export default Authenticate(App);
