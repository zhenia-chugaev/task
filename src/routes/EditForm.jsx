import { useNavigate, useParams } from 'react-router-dom';
import { Main, TaskForm, NavPane } from '../components/';
import useDatabase from '../hooks/useDatabase';
import { getTimestamp, getFormattedDate } from '../utils/time';
import { routes } from './';

const EditForm = () => {
  const navigate = useNavigate();
  const { listNum, taskId } = useParams();
  const { readTask, updateTask } = useDatabase();

  const [taskKey, task = {}] = readTask('id', taskId);

  const initialValues = {
    ...task,
    date: getFormattedDate(task.date),
  };

  const handleSubmit = async (values, onError) => {
    try {
      const task = { ...values, date: getTimestamp(values.date) };
      await updateTask(taskKey, task);
      navigate(routes.task(listNum, taskId));
    } catch {
      onError();
    }
  };

  return (
    <Main>
      <NavPane
        reference={routes.task(listNum, taskId)}
        title="Edit Task"
      />
      <TaskForm
        values={initialValues}
        actionType="Save"
        handleSubmit={handleSubmit}
      />
    </Main>
  );
};

export default EditForm;
