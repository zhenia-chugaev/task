import { useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { Button, Form } from 'react-bootstrap';

const TaskForm = ({ values, actionType, handleSubmit }) => {
  const [isInvalid, setIsInvalid] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus(), []);

  const formik = useFormik({
    initialValues: {
      title: '',
      date: '',
      description: '',
      completed: false,
      ...values,
    },
    onSubmit: (values) => handleSubmit(values, () => setIsInvalid(true)),
  });

  return (
    <div className="task-form mx-auto">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-4" controlId="title">
          <Form.Label>Title *</Form.Label>
          <Form.Control
            ref={inputRef}
            type="text"
            name="title"
            defaultValue={values?.title}
            isInvalid={isInvalid}
            placeholder="Daily meeting"
            onChange={formik.handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="date">
          <Form.Label>Date *</Form.Label>
          <Form.Control
            type="date"
            name="date"
            defaultValue={values?.date}
            isInvalid={isInvalid}
            onChange={formik.handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            defaultValue={values?.description}
            isInvalid={isInvalid}
            onChange={formik.handleChange}
            rows={4}
          />
          <Form.Control.Feedback type="invalid">
            Something went wrong. Try again.
          </Form.Control.Feedback>
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          {actionType}
        </Button>
      </Form>
    </div>
  );
};

export default TaskForm;
