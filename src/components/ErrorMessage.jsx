import { Toast, ToastContainer } from 'react-bootstrap';

const ErrorMessage = ({ show, handleClose }) => (
  <ToastContainer className="m-2" position="top-end">
    <Toast
      show={show}
      onClose={handleClose}
      bg="secondary"
      delay={3000}
      autohide
    >
      <Toast.Body className="fs-6">
        <div>
          <i className="bi bi-x-circle-fill me-2"></i>
          <span className="me-auto fw-bold">Error</span>
        </div>
        <div>Something went wrong. Try again.</div>
      </Toast.Body>
    </Toast>
  </ToastContainer>
);

export default ErrorMessage;
