import { Link } from "react-router-dom";
import LogowithSlogan from "./assets/LogowithSlogan.png"
import { useEffect, useState } from "react";


export default function Nav() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div>
      <nav className={`navbar navbar-expand-lg ${scrolled ? "navbar-scrolled  bg-opacity-50" : ""}`}>
        {/* <nav className="navbar navbar-expand-lg bg-body-tertiary py-0"> */}
          <div className="container-fluid container">
            {/* ------The Logo------ */}
            <div className="navbar-brand d-flex align-items-center  gap-2">
              <img
                src={LogowithSlogan}
                alt="DAR"
                style={{ width: "80px", height: "80px", objectFit: "contain" }}
              />
             
            </div>
            {/* ------Responsive Navbar------ */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false" 
              aria-label="Toggle navigation"
            
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse  justify-content-center"
              id="navbarTogglerDemo02"
            >
              {/* ------List------ */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto px-5 py-2 ">
                <li className="nav-item ">
                  <Link to="/Home" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/About" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Services" className="nav-link">
                    Services 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Projects" className="nav-link">
                    Projects 
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="/Blog" className="nav-link">
                    Blog 
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link to="/Contact" className="nav-link">
                    Contact 
                  </Link>
                </li>
              </ul>

             <button className="booking-btn">
                 <Link to="/Contact" className="nav-link">
                    Book a Meeting 
                  </Link></button>

      </div>
          </div>
        </nav>
      </div>
    </>
  );
}
