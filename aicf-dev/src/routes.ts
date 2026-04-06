import { createBrowserRouter } from "react-router";
import Landing from "./components/landing";
import VedicMaths from "./components/vedic-maths";

let routes = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/vedic-maths",
    Component: VedicMaths,
  },
]);

export default routes;
