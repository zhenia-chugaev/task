import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Checkbox, ErrorMessage } from '#components'
import useDatabase from '#hooks/useDatabase';
import { getTasksDataByDay } from '#utils/tasks';
import { routes } from './';

const TodoList = () => {
  const [isErrorShown, setIsErrorShown] = useState(false);
  const { tasks, updateTask } = useDatabase();
  const { listNum } = useParams();

  const dayTasks = getTasksDataByDay(tasks, Number(listNum));
  const tasksCount = dayTasks.length;

  const handleChange = async (taskKey) => {
    try {
      const task = tasks[taskKey];
      await updateTask(taskKey, { ...task, completed: !task.completed });
    } catch (err) {
      setIsErrorShown(true);
    }
  };

  return (
    <>
      <p className="h5 mt-0 mb-4">
        {tasksCount} {tasksCount === 1 ? 'Task' : 'Tasks'} Today
      </p>
      <ul className="todo-list flex-grow-1">
        {dayTasks.map(([taskKey, task], i) => (
          <li className="todo-item" key={task.id}>
            <Checkbox
              className="todo-checkbox rounded-4"
              id={`todo-checkbox-${i}`}
              checked={task.completed}
              onChange={() => handleChange(taskKey)}
            />
            <Link
              className="link-dark text-decoration-none"
              to={routes.task(listNum, task.id)}
            >
              {task.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="menu d-grid">
        <Button as={Link} to={routes.addForm(listNum)} variant="primary">
          Add a New Task
        </Button>
      </div>

      <ErrorMessage
        show={isErrorShown}
        handleClose={() => setIsErrorShown(false)}
      />
    </>
  );
};

export default TodoList;
