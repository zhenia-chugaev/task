import { useContext } from 'react';
import DatabaseContext from '../contexts/DatabaseContext';

const useDatabase = () => useContext(DatabaseContext);

export default useDatabase;
