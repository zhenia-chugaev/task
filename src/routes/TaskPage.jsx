import { useNavigate, useParams, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import useDatabase from '../hooks/useDatabase';
import { routes } from './';

const TaskPage = () => {
  const { listNum, taskId } = useParams();
  const { readTask, deleteTask } = useDatabase();
  const navigate = useNavigate();

  const [taskKey, task = {}] = readTask('id', taskId);

  const handleDelete = async () => {
    try {
      await deleteTask(taskKey);
      navigate(routes.todo(listNum));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Link to={routes.todo(listNum)}>Back</Link>
      <p>{taskKey} | {task.id}</p>
      <Button as={Link} to={routes.editForm(listNum, taskId)} variant="link">
        Edit
      </Button>
      <Button type="button" variant="link" onClick={handleDelete}>
        Delete
      </Button>
    </>
  );
};

export default TaskPage;
