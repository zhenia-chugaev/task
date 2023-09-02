import { createContext } from 'react';

const DatabaseContext = createContext({
  tasks: {},
  createTask: () => {},
  readTask: () => {},
  updateTask: () => {},
  deleteTask: () => {},
});

export default DatabaseContext;
