import React from 'react'
import Button from './Button';

const Header = () => {
  return (
    <>
      <nav className="navbar container text-light my-2">
        <a
          href="#"
          className="navbar=brand text-light text-decoration-none fw-bold"
        >
          <h2>Stock Prediction Portal</h2>
        </a>

        <div className="button">
          
          <Button value="Login" type="outline-info"/>
          &nbsp;
          
          <Button value="Register" type="info fw-semibold" />
        </div>
      </nav>
    </>
  );
}

export default Header