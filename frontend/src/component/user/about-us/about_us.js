import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const about_us = () => {
  return (
    <div className="bg-light py-5">
      <div className="container text-left">
        {/* ABOUT US */}
        <h2 className="text-uppercase h5">ABOUT ORIGINAL</h2>
        <p className="text-muted">
          We are young, talented architects, and our philosophy is to bring the
          breath of life into your space.
        </p>

        {/* CONTACT */}
        <h3 className="text-uppercase h6 mt-4">CONTACT</h3>
        <ul className="list-unstyled">
          <li>
            Email:{" "}
            <a
              href="mailto:k59atelier@gmail.com"
              className="text-decoration-none text-muted"
            >
              original@gmail.com
            </a>
          </li>
          <li>
            Phone original :{" "}
            <span className="text-muted">+84 2873000359</span>
          </li>
          <li>
            Phone (in person): <span className="text-muted">+84 906971887</span>
          </li>
          <li>
            Website:{" "}
            <a
              href="http://k59atelier.com"
              className="text-decoration-none text-muted"
            >
              http://original.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default about_us;
