import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      {/* navigation section */}
      <header>navigation section</header>
      {/* main section */}
      <main>
        <Outlet />
      </main>
      {/* footer section */}
      <footer>footer section</footer>
    </div>
  );
}
