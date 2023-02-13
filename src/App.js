import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./layouts/Root";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AuthGuard from "./components/AuthGuard";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";

function Products() {
  // products page
  return <div>Products works</div>;
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: (
            <AuthGuard>
              <Products />
            </AuthGuard>
          ),
        },
        { path: "signin", element: <Signin /> },
        { path: "signup", element: <Signup /> },
      ],
    },
  ]
);

export default function App() {
  return <RouterProvider router={router} />;
}
