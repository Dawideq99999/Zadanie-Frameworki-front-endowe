import { PropTypes } from 'prop-types'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Lab1Page from '../pages/Lab1Page';
import Lab2Page from '../pages/Lab2Page';
import Home from '../pages/Home';

function RootLayout({ children }) {
  const menuItems = [
    {
      id: 1,
      label: "Home",
      url: "/home",
      urlPattern: "/",
      element: <Home />
    },
    {
      id: 2,
      label: "Laboratorium 1",
      url: "/lab1",
      urlPattern: "/",
      element: <Lab1Page />
    },
    {
      id: 3,
      label: "Laboratorium 2",
      url: "/lab2/1",
      urlPattern: "/lab2/:id",
      element: <Lab2Page />
    }
  ];

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {menuItems.map(item => (
                <Nav.Link key={item.id} href={item.url}>{item.label}</Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        {children}
      </main>
    </>
  );
}


RootLayout.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default RootLayout;
