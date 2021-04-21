import React from "react";
import { Navbar } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar
        fixed="top"
        className="d-flex justify-content-center align-items-center p-4"
      >
        <img
          className="header-logo"
          alt="Immersa"
          src="https://secureservercdn.net/72.167.241.46/jpf.d19.myftpupload.com/wp-content/uploads/2021/03/immersa_logo_fullcolor-2.png"
        />
      </Navbar>
    </>
  );
}

export default Header;
