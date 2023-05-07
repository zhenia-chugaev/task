import { useParams, useNavigate } from 'react-router-dom';
import { Main, TaskForm, NavPane } from '../components/';
import useDatabase from '../hooks/useDatabase';
import * as Time from '../utils/time';
import { routes } from './';

const AddForm = () => {
  const navigate = useNavigate();
  const { listNum } = useParams();
  const { createTask } = useDatabase();

  const listDate = Time.getFormattedDate(Time.today() + Time.MSEC_PER_DAY * listNum);

  const handleSubmit = async (values, onError) => {
    try {
      const task = { ...values, date: Time.getTimestamp(values.date) };
      await createTask(task);
      navigate(routes.todo(listNum));
    } catch {
      onError();
    }
  };

  return (
    <Main>
      <NavPane
        reference={routes.todo(listNum)}
        title="Add Task"
      />
      <TaskForm
        values={{ date: listDate }}
        actionType="Add"
        handleSubmit={handleSubmit}
      />
    </Main>
  );
};

export default AddForm;
