import { faBook, faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = () => {
  return (
    <header className="container-fluid">
      <main className="row">
        <nav className="navbar bg-dark navbar-dark justify-content-around justify-content-md-between flex-nowrap">
          {/* <!--       logo --> */}
          <a href="#" className="d-none d-md-block navbar-brand ms-1">
            Booklog
          </a>
          {/* <!--       search form --> */}
          <form className="d-flex mx-1" role="search">
            <div className="input-group">
              <button className="input-group-text btn btn-light">
                <li className="nav-link dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <small>Booklog store</small>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">
                      <a href="#" className="nav-link">
                        Category 1
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#" className="nav-link">
                        Category 2
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#" className="nav-link">
                        Category 3
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#" className="nav-link">
                        Category 4
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#" className="nav-link">
                        Category 5
                      </a>
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
          <button className="d-none d-md-block btn btn-dark dropdown py-0 me-2">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="d-flex flex-column justify-content-center">
                <small>Hello, sign in</small>
                <strong>Account</strong>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <a href="#" className="nav-link">
                  Account
                </a>
              </li>
              <li className="dropdown-item">
                <a href="#" className="nav-link">
                  Orders
                </a>
              </li>
              <li className="dropdown-item">
                <a href="#" className="nav-link">
                  Library
                </a>
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
