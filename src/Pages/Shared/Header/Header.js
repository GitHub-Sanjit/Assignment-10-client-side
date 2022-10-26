import React from "react";
import Button from "react-bootstrap/Button";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        className="mb-3"
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="#home">
            <h2>Online-Mentor</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Courses</Nav.Link>
              <Nav.Link href="#pricing">FAQ</Nav.Link>
              <Link to="/blog">Blog</Link>
              <Button variant="outline-success" size="sm">
                <FaGoogle></FaGoogle> Login via Google
              </Button>
              <Button variant="outline-success" size="sm">
                <FaGithub></FaGithub> Login via GitHub
              </Button>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
            <div className="d-lg-none">
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
