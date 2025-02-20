// We are importing App from the App.js file in the src/components directory (the .js does not need to be included). 
// This import statement is what we use to import something that is the default export of another file:
// The index.js file doesn't have an export. It is the 'top' of this dependency tree.

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
