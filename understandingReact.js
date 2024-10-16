const rootElement = document.getElementById("js");

// Create a nested structure with the div containing the h1 element
const nestedElements = React.createElement("div", { id: "firstDiv" },
    React.createElement("h1", { id: "firstHeading" }, "Hey this is my first child inside div created through react")
);

const root = ReactDOM.createRoot(rootElement);
root.render(nestedElements);