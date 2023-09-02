import { Link } from 'react-router-dom';
import { Stack, Card } from 'react-bootstrap';
import cn from 'classnames';
import useDatabase from '../hooks/useDatabase';
import * as Time from '../utils/time';
import { getTasksDataByDay } from '../utils/tasks';
import { routes } from '../routes';

const Calendar = () => {
  const { tasks } = useDatabase();

  const dayOfTheMonth = Time.getDay();
  const daysLeft = (Time.daysInMonth() - dayOfTheMonth) + 1;

  return (
    <div className="calendar">
      <Stack direction="horizontal" gap={3}>
        {Array.from({ length: daysLeft }, (_, i) => dayOfTheMonth + i)
          .map((day, i) => {
            const dayTasks = getTasksDataByDay(tasks, i).map(([_, task]) => task);
            const dayName = Time.getDayName(Date.now() + i * Time.MSEC_PER_DAY);

            const hasCompletedTasks = dayTasks.some((task) => task.completed);
            const hasIncompletedTasks = dayTasks.some((task) => !task.completed);

            const dayClassName = cn('calendar-day', 'text-center', 'rounded-4', {
              'bg-dark': i === 0,
              'text-light': i === 0,
              'text-primary': i !== 0 && dayName === 'Sun',
              'border-primary': i !== 0 && dayName === 'Sun',
            });

            const barClassName = cn('status-bar', {
              'has-completed': hasCompletedTasks,
              'has-incompleted': hasIncompletedTasks,
            });

            return (
              <div key={i}>
                <Card className={dayClassName} as={Link} to={routes.todo(i)}>
                  <Card.Body>
                    <span className="d-block mb-1">{dayName}</span>
                    <span className="fw-bold">{day}</span>
                  </Card.Body>
                </Card>
                <div className={barClassName}></div>
              </div>
            );
          })}
      </Stack>
    </div>
  );
};

export default Calendar;
