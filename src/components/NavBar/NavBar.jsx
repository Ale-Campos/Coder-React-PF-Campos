import CartWidget from "./CartWidget";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header className="container-fluid">
        <div className="row">
          <div className="col mx-0 px-0">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <NavLink to={`/`} className="navbar-brand" >
                  Tienda de tecnología
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent:'space-between'}}>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink to={'/'} className="nav-link active" aria-current="page">
                        Inicio
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={'/category/celulares'} className="nav-link">
                        Celulares
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={'/category/computadoras'} className="nav-link">
                        Computadoras
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={'/category/tvs'} className="nav-link">
                        TVs
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={'/category/otros'} className="nav-link">
                        Otros
                      </NavLink>
                    </li>
                  </ul>
                  <div className="cart">
                    <CartWidget></CartWidget>
                    <div className="navbar-collapse">
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        
      </header>
    </>
  );
};

export default NavBar;
