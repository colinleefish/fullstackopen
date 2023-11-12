import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Part1A from "./Part1A";
import Part1C from './Part1C';

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* <Part1A /> */}
    <Part1C />
  </StrictMode>
);
