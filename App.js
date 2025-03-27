import React from "react";
import ReactDOM from "react-dom/client";

// React element
const heading = (
  <h1 id="heading" className="heading">
    Namaste React 👌 from jsx.
  </h1>
);

// React functional component
const HeadingComponent = () => (
  <h1 className="heading">Namaste from Functional component</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
