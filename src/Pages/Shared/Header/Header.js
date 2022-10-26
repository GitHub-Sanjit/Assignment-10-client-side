import React from "react";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <div>
      <h2>This is Header</h2>
      <Button variant="outline-success">Login via Google</Button>
      <Button variant="outline-success">Login via GitHub</Button>
    </div>
  );
};

export default Header;
