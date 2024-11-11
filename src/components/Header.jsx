// import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex flex-row justify-content-evenly w-100">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sales" className="nav-link">
              <i className="fas fa-tags"></i> Sales
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              <i className="fas fa-shopping-cart"></i> Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    )
}

export default Header