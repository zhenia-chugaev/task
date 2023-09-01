import { useState, useEffect, useRef } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';

const AuthForm = ({ actionType, formText, handleSubmit }) => {
  const [isInvalid, setIsInvalid] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus(), []);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => handleSubmit(values, () => setIsInvalid(true)),
  });

  const { user } = useAuth();
  const location = useLocation();

  return user ? <Navigate to={location.state.from.pathname} /> : (
    <div className="auth-form mx-auto">
      <Form className="mt-5" onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            ref={inputRef}
            type="email"
            name="email"
            defaultValue={formik.values.email}
            isInvalid={isInvalid}
            placeholder="example@gmail.com"
            autoComplete="email"
            onChange={formik.handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            defaultValue={formik.values.password}
            isInvalid={isInvalid}
            placeholder="password"
            minLength={8}
            autoComplete="current-password"
            onChange={formik.handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Something went wrong. Check if your email/password is correct.
          </Form.Control.Feedback>
        </Form.Group>
        <Button className="w-100 my-2" variant="dark" type="submit">{actionType}</Button>
        <Form.Text className="d-block text-center">{formText}</Form.Text>
      </Form>
    </div>
  );
};

export default AuthForm;
