import ObservedApp from "./components/App.tsx";
import ReactDOM from "react-dom/client";
import React from 'react';

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<ObservedApp />);
} else {
  console.error("Failed to find the root element.");
}
