import { Link, Navigate } from "react-router-dom";
import {
  faBook,
  faCartShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase-config";

const Navigation = () => {
  const [user, loading, error] = useAuthState(auth);

  const showStoreDropDown = () => {
    const bookStore = document.getElementById("bookstore");
    let classList = bookStore.classList;

    if (Array.from(classList).filter((c) => c == "show").length == 0)
      classList.add("show");

    classList = bookStore.nextElementSibling.classList;
    if (Array.from(classList).filter((c) => c == "show").length == 0) {
      classList.add("show");
      bookStore.nextElementSibling.setAttribute(
        "style",
        "position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 20px);"
      );
    }
  };
  const removeStoreDropDown = () => {
    const bookStore = document.getElementById("bookstore");
    let classList = bookStore.classList;

    if (!(Array.from(classList).filter((c) => c == "show").length == 0)) {
      classList.remove("show");
    }

    classList = bookStore.nextElementSibling.classList;
    if (!(Array.from(classList).filter((c) => c == "show").length == 0)) {
      classList.remove("show");
      bookStore.removeAttribute("style");
    }
  };

  // FIXME: use mouse enter and leave events
  const handleClick2 = () => {
    const user = document.getElementById("user");

    const classList1 = user.classList;
    if (Array.from(classList1).filter((c) => c == "show").length == 0)
      classList1.add("show");
    else classList1.remove("show");

    const classList2 = user.nextElementSibling.classList;
    if (Array.from(classList2).filter((c) => c == "show").length == 0) {
      classList2.add("show");
      user.nextElementSibling.setAttribute(
        "style",
        "position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 50px);"
      );
    } else {
      classList2.remove("show");
      user.removeAttribute("style");
    }
  };

  const signOut = () => {
    user.signOut();
    const navigate = Navigate();
    navigate("/signin");
  };

  return (
    <header className="container-fluid">
      <main className="row">
        <nav className="navbar bg-dark navbar-dark justify-content-around justify-content-md-between flex-nowrap">
          {/* <!--       logo --> */}
          <Link to="" className="d-none d-md-block navbar-brand ms-1">
            Booklog
          </Link>
          {/* <!--       search form --> */}
          <form className="d-flex mx-1">
            <div className="input-group">
              <button
                type="button"
                className="input-group-text btn btn-light"
                onMouseEnter={showStoreDropDown}
                onMouseLeave={removeStoreDropDown}
              >
                <li className="nav-link dropdown">
                  <Link
                    id="bookstore"
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <small>Booklog store</small>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">
                      <Link to="" className="nav-link">
                        Category 1
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="" className="nav-link">
                        Category 2
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="" className="nav-link">
                        Category 3
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="" className="nav-link">
                        Category 4
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="" className="nav-link">
                        Category 5
                      </Link>
                    </li>
                  </ul>
                </li>
              </button>
              <input
                className="form-control"
                type="search"
                placeholder="Search Booklog"
                aria-label="Search"
              />
              <button
                className="input-group-text btn btn-primary"
                type="submit"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </form>
          {/* <!--       user account --> */}
          <button
            className="d-none d-md-block btn btn-dark dropdown py-0 me-2"
            onMouseEnter={handleClick2}
          >
            <Link
              id="user"
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="d-flex flex-column justify-content-center">
                <small>
                  Hello,{" "}
                  {user && !loading
                    ? user?.displayName
                      ? user.displayName.split(" ")[0]
                      : "User"
                    : "sign in"}
                </small>
                <strong>Account</strong>
              </div>
            </Link>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="" className="nav-link">
                  Account
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="" className="nav-link">
                  Orders
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="" className="nav-link">
                  Library
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="" className="nav-link" onClick={signOut}>
                  Sign Out
                </Link>
              </li>
            </ul>
          </button>
          {/* <!--       orders --> */}
          <button className="btn btn-dark me2 d-none d-md-block">
            <div className="d-flex flex-column justify-content-center">
              <FontAwesomeIcon icon={faBook} />
              <strong>Orders</strong>
            </div>
          </button>
          {/* <!--       carts --> */}
          <button className="btn btn-dark me2 d-none d-md-block">
            <div className="d-flex flex-column justify-content-center">
              <FontAwesomeIcon icon={faCartShopping} />
              <strong>Cart</strong>
            </div>
          </button>
        </nav>
      </main>
    </header>
  );
};

export default Navigation;
