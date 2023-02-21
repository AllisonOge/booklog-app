import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Root() {
  return (
    <div>
      {/* navigation section */}
      <Navigation />
      {/* main section */}
      <Outlet />
      {/* footer section */}
      {/* <footer>footer section</footer> */}
    </div>
  );
}
