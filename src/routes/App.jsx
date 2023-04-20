import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const logIn = () => setIsUserLoggedIn(true);
  const logOut = () => setIsUserLoggedIn(false);

  return (
    <div className="app">
      <header>
        <Container>
          <Navbar>
            <Navbar.Brand as={Link} to="/">Tassker</Navbar.Brand>
            <Nav className="ms-auto">
              {isUserLoggedIn
                ? <Button variant="dark" onClick={logOut}>Log out</Button>
                : <>
                  <Nav.Link as={Link} to="/signup" className="me-3">Sign up</Nav.Link>
                  <Button as={Link} to="/login" variant="dark">Log in</Button>
                </>
              }
            </Nav>
          </Navbar>
        </Container>
      </header>
      <main>
        <Container>
          <AuthContext.Provider value={{ isUserLoggedIn, logIn, logOut }}>
            <Outlet />
          </AuthContext.Provider>
        </Container>
      </main>
    </div>
  );
};

export default App;
