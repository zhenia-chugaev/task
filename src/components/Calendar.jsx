import { Link } from 'react-router-dom';
import useDatabase from '../hooks/useDatabase';
import { routes } from '../routes';

const Calendar = () => {
  const { tasks } = useDatabase();

  return (
    <ul>
      {Object.entries(tasks).map(([id, task], i, arr) => (
        <li key={i}>
          <span>{new Date(task.date).getDate()}</span>{" "}
          <Link to={routes.todo(i)}>{arr.length}</Link>
        </li>
      )
      )}
    </ul>
  );
}

export default Calendar;
