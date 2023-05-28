import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NavPane = ({ title, reference }) => {
  return (
    <div className="nav-pane d-flex align-items-center">
      <Button className="me-2 link-dark" as={Link} to={reference} variant="link">
        <i className="bi bi-chevron-left" />
      </Button>
      <p className="h5 m-0">{title}</p>
    </div>
  );
};

export default NavPane;
