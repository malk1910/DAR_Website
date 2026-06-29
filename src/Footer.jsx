import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer p-5">
        <div className="container text-right">
          <div className="row g-5">
            <div className="col col-12 col-md-6 col-lg-4">
              <span></span>
              <h4>Our Company </h4>
              <p className="footer-desc ">
              DAR is a trusted construction and engineering company specializing in industrial, medical, educational, and infrastructure projects, delivering excellence through quality, innovation, and sustainability.
              </p>
              <div className="social-icons-footer d-flex gap-2 mt-4">
                <Link to="/" className="social-link">
                  <i className="fa-brands fa-facebook"></i>
                </Link>
                <Link to="/" className="social-link">
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
                <Link to="/" className="social-link">
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>
                <Link to="/" className="social-link">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </div>
            </div>


            <div className="col col-6 col-md-3 col-lg-4">
              <h4>Overview</h4>
              <div className="footer-links">
                <Link to="/Home">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Services"> Services </Link>
                <Link to="/Projects">Projects</Link>
                {/* <Link to="/Blog">Blog</Link> */}

              </div>
            </div>

            <div className="col col-6 col-md-3 col-lg-4">
              <h4>Quick Links</h4>
              <div className="footer-links">
                <Link to="/Contact" >Contact Us</Link>
                {/* <Link to="/Blog" >Blog</Link> */}
                <Link to="/Policy" >Policy & Privacy </Link>
                <Link to="/Terms" >Terms & Conditions</Link>

              </div>
            </div>
          
           
          </div>
        </div>
        <hr></hr>

        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-md-6">© 2026 DAR Build To Trust. All rights reserved.</div>
           
          </div>
        </div>
      </div>
    </>
  );
}
