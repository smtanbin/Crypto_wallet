import { Link } from "react-router-dom"
const api = `http://${import.meta.env.VITE_API}:${import.meta.env.VITE_PORT}`
import useAuth from "../../Apps/Hook/useAuth"
import logo from "../../../src/Images/logo.svg"

export default function Navbar() {
  const { setAuth } = useAuth()
  const handelAuth = () => {
    setAuth()
  }

  return (
    <nav
      className="d-print-none navbar navbar-expand-lg navbar-light bg-light"
      style={{
        width: "100vw",
        backgroundColor: "black",
        zIndex: 100,
      }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand navbar-toggler d-flex"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <span className="navbar-toggler-icon"></span>
        </a>

        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list-ul"></i>
        </button> */}
        <Link to="/" className="navbar-brand mx-4" href="#">
          <img
            src={logo}
            height="25"
            className="d-inline-block align-text-top mx-2 navbar-brand fw-light"
          />
          BeeCoin
        </Link>

        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <Link to={"/change_passwd"} className="dropdown-item">
                    Change Password
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    to={"/login"}
                    onClick={handelAuth}
                    className="dropdown-item"
                  >
                    Log Out
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  )
}
