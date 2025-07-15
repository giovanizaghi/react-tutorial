import { useEffect, useState } from 'react'
import Welcome from './components/Welcome'
import UserList from './components/UserList';
import { useTheme } from './contexts/ThemeContext';
import "./App.css";
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { decrement, increment, incrementByAmount } from './features/counterSlice';
import { fetchUsers } from './features/usersSlice';

function App() {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  //redux - counter
  const count = useAppSelector(state => state.counter.value);

  //redux - users
  const {users, loading, error} = useAppSelector(state => state.users);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(()=>{
    
    dispatch(fetchUsers());

  }, [dispatch])

  return (
    <div className={theme}>
      <h1>"Need to know" Tutorial</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Welcome name="Giovani!" />
      <UserList users={users} loading={loading} error={error} />

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
