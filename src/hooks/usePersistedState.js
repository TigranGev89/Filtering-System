import { useState, useEffect } from 'react';

const usePersistedState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const savedValue = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default usePersistedState;

