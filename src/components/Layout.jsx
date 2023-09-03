import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import useAuth from '#hooks/useAuth';

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <header>
      <Container>
        <Navbar>
          <Navbar.Brand as={Link} to="/">Tassker</Navbar.Brand>
          <Nav className="ms-auto">
            {user
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
  );
};

const Main = (props) => (
  <main {...props}>
    <Container className="h-100">
      {props.children}
    </Container>
  </main>
);

export { Header, Main };
