import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css";
const NavBar = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Tienda de tecnología
            </a>
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
                  <a className="nav-link active" aria-current="page" href="#">
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Celulares
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Computadoras
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    TVs
                  </a>
                </li>
              </ul>
              <div className="cart">
                <CardWidget></CardWidget>
                <div className="navbar-collapse">
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
