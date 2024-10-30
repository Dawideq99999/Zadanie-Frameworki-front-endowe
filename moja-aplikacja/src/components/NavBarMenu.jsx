import React from 'react';
import { Nav } from 'react-bootstrap';  

const NavBarMenu = ({ items }) => {
  return (
    <Nav>
      {items.map(item => (
        <Nav.Link href={item.url} key={item.id}>
          {item.label}
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default NavBarMenu;