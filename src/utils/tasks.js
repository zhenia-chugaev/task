import * as Time from './time';

const getTasksDataByDay = (tasks, dayIndex) => Object.entries(tasks)
  .filter(([_, task]) => {
    const todoListIndex = (task.date - Time.today()) / Time.MSEC_PER_DAY;
    return todoListIndex === dayIndex;
  });

export { getTasksDataByDay };
