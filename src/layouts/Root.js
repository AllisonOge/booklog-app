import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Root() {
  return (
    <div>
      {/* navigation section */}
      <Navigation />
      {/* main section */}
      <main>
        <Outlet />
      </main>
      {/* footer section */}
      {/* <footer>footer section</footer> */}
    </div>
  );
}
