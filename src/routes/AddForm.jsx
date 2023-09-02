import { useParams, useNavigate } from 'react-router-dom';
import { Main } from '../components/Layout';
import NavPane from '../components/NavPane';
import TaskForm from '../components/TaskForm';
import useDatabase from '../hooks/useDatabase';
import { getTimestamp } from '../utils/time';
import { routes } from './';

const AddForm = () => {
  const navigate = useNavigate();
  const { listNum } = useParams();
  const { createTask } = useDatabase();

  const handleSubmit = async (values, onError) => {
    try {
      const task = { ...values, date: getTimestamp(values.date) };
      await createTask(task);
      navigate(routes.todo(listNum));
    } catch {
      onError();
    }
  };

  return (
    <Main>
      <NavPane reference={routes.todo(listNum)} title="Add Task" />
      <TaskForm actionType="Add" handleSubmit={handleSubmit} />
    </Main>
  );
};

export default AddForm;
