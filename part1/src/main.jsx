import { StrictMode } from "react";
import ReactDom from "react-dom/client";
// import Part1A from "./Part1A";
// import Part1C from "./Part1C";
import Part1CRefresh from "./Part1CRefresh";

ReactDom.createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Part1A /> */}
    <Part1CRefresh />
  </StrictMode>
);
