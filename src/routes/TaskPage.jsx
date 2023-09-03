import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Main, Column, NavPane, Checkbox, ErrorMessage } from '#components';
import useDatabase from '#hooks/useDatabase';
import { routes } from './';

const TaskPage = () => {
  const [isErrorShown, setIsErrorShown] = useState(false);
  const { listNum, taskId } = useParams();
  const { readTask, deleteTask, updateTask } = useDatabase();
  const navigate = useNavigate();

  const [taskKey, task = {}] = readTask('id', taskId);

  const handleDelete = async () => {
    try {
      await deleteTask(taskKey);
      navigate(routes.todo(listNum));
    } catch (err) {
      setIsErrorShown(true);
    }
  };

  const handleChange = async (taskKey) => {
    try {
      await updateTask(taskKey, { ...task, completed: !task.completed });
    } catch (err) {
      setIsErrorShown(true);
    }
  };

  return (
    <Main className="mh-none">
      <Column>
        <NavPane reference={routes.todo(listNum)} title="Task Info" />

        <div className="task-info flex-grow-1">
          <div className="todo-item">
            <Checkbox
              className="todo-checkbox rounded-4"
              id={task.id}
              checked={task.completed}
              onChange={() => handleChange(taskKey)}
            />
            <span>{task.title}</span>
          </div>
          <p>{task.description || 'No description yet.'}</p>
        </div>

        <div className="menu d-flex align-items-center">
          <Button
            className="text-dark py-0 px-4 border-end"
            type="button"
            variant="link"
            onClick={handleDelete}
          >
            <i className="bi bi-trash3"></i>
          </Button>
          <Button
            className="text-dark py-0 px-4"
            as={Link}
            to={routes.editForm(listNum, taskId)}
            variant="link"
          >
            <i className="bi bi-pencil"></i>
          </Button>
          <Button
            className="ms-auto"
            variant={task.completed ? 'primary' : 'success'}
            onClick={() => handleChange(taskKey)}
          >
            {task.completed ? 'Undone' : 'Complete'}
            {!task.completed && <i className="bi bi-check-lg ms-3"></i>}
          </Button>
        </div>

        <ErrorMessage
          show={isErrorShown}
          handleClose={() => setIsErrorShown(false)}
        />
      </Column>
    </Main>
  );
};

export default TaskPage;
