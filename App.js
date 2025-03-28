import React from "react";
import ReactDOM from "react-dom/client";

// React element
const Title = () => (
  <h1 id="heading" className="heading">
    Namaste React 👌 from jsx.
  </h1>
);

// React component composition
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 id="heading" className="heading">
      Namaste from Functional component 😊👌
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
