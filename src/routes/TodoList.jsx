import { useParams, Link } from 'react-router-dom';
import useDatabase from '../hooks/useDatabase';
import * as Time from '../utils/time';
import { routes } from './';

const TodoList = () => {
  const { tasks } = useDatabase();
  const { listNum } = useParams();

  return (
    <>
      <p>{listNum}</p>
      <ul>
        {Object.entries(tasks).map(([taskKey, task]) => (
          <li key={taskKey}>
            <span>{(task.date - Time.today()) / 86400000}</span>{" "}
            <Link to={routes.task(listNum, task.id)}>{task.title}</Link>{" "}
            <span>key: {taskKey}</span>
          </li>
        )
        )}
      </ul>
      <Link to={routes.addForm(listNum)}>Add a New Task</Link>
    </>
  );
};

export default TodoList;
