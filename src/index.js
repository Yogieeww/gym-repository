// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// reportWebVitals();

import React from "react";
import { createRoot } from "react-dom";
import App from "./App";

// Replace ReactDOM.render with createRoot
const root = createRoot(document.getElementById("root"));
root.render(<App />);