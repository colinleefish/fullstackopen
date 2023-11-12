import { StrictMode } from "react";
import ReactDom from "react-dom/client";
// import Part1A from "./Part1A";
// import Part1C from "./Part1C";
// import part1CRefresh from "./Part1CRefresh.jsx";
// import Part1D from "./Part1D";
// import Part1UniCafe from "./Part1UniCafe";
import Part1Anecdotes from "./Part1Anecdotes";

ReactDom.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Part1Anecdotes />
  </StrictMode>
);
