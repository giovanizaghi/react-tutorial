import { useEffect } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import UserList from './components/UserList';
import { useTheme } from './contexts/ThemeContext';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { decrement, increment, incrementByAmount } from './features/counterSlice';
import { fetchUsers } from './features/usersSlice';


function App() {

  const { theme, toggleTheme } = useTheme();

  const dispatch = useAppDispatch();

  //Redux - counter
  const count = useAppSelector(state => state.counter.value);

  //Redux - users
  const {users, loading, error} = useAppSelector(state => state.users);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <Welcome name='Giovani' />
      <h2>Theme</h2>
      <p>Your current theme is: {theme}</p>
      <button onClick={toggleTheme}>Toggle theme</button>
      <hr />
      <h2>Count function</h2>
      <p>count: {count}</p>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
      <button onClick={()=> dispatch(incrementByAmount(5))}>+5</button>
      <hr />

      <UserList users={users} loading={loading} error={error} />

    </>
  )
}

export default App
