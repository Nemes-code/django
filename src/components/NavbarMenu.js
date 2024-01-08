import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css";

const NavbarMenu = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home">NEXCI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
          <NavLink className="nav" to="/">
            Products
          </NavLink>
          <NavLink className="nav" to="/Add">
            Add Products
          </NavLink>
          <NavLink className="nav" to="/Details">
            Product Details
          </NavLink>
          <NavLink className="nav" to="/Update">
            Update Products
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavbarMenu;
