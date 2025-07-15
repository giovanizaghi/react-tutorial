import { useEffect, useState } from 'react'
import Welcome from './components/Welcome'
import UserList from './components/UserList';
import { useTheme } from './contexts/ThemeContext';
import "./App.css";
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { decrement, increment, incrementByAmount } from './features/counterSlice';

function App() {
  const { theme, toggleTheme } = useTheme();

  const [users, setUsers] = useState<Array<any>>([]);

  //redux
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));

  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={theme}>
      <h1>"Need to know" Tutorial</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Welcome name="Giovani!" />
      <UserList users={users} />

      <div>
        <h2>
          Counter (Redux) 
        </h2>
        <p>Current count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      </div>

    </div>
  )
}

export default App
