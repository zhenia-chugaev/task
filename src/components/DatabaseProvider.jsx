import { useState, useEffect } from 'react';
import {
  getDatabase,
  ref, query,
  push, onValue, set, remove,
  orderByChild, startAt,
} from 'firebase/database';
import useAuth from '../hooks/useAuth';
import DatabaseContext from '../contexts/DatabaseContext';
import * as Time from '../utils/time';

const DatabaseProvider = ({ children, databaseInstance }) => {
  const [tasks, setTasks] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const taskList = ref(getDatabase(), `tasks/${user.uid}`);
      const tasksRef = query(taskList, orderByChild('date'), startAt(Time.today()));
      return onValue(tasksRef, (data) => setTasks(data.exists() ? data.val() : {}));
    }
  }, [user]);

  const createTask = (task) => {
    const taskList = ref(databaseInstance, `tasks/${user.uid}`);
    const newTaskRef = push(taskList);
    const taskId = newTaskRef.key.slice(-4);
    return set(newTaskRef, { id: taskId, ...task });
  };

  const readTask = (field, value) => {
    const taskData = Object.entries(tasks).find(([_, task]) => task[field] === value);
    return taskData ?? [];
  }

  const updateTask = (taskId, task) => {
    const taskRef = ref(databaseInstance, `tasks/${user.uid}/${taskId}`);
    return set(taskRef, task);
  };

  const deleteTask = (taskId) => {
    const taskRef = ref(databaseInstance, `tasks/${user.uid}/${taskId}`);
    return remove(taskRef);
  };

  return (
    <DatabaseContext.Provider value={{ tasks, createTask, readTask, updateTask, deleteTask }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseProvider;
