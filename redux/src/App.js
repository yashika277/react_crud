import { useDispatch } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { GET_USER_PENDING } from './redux-Saga/User/action/action';
import Data from './Component/Data';

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_USER_PENDING })
  }, [dispatch])

  return (
    <div className="App">
      <Data/>
    </div>
  );
}

export default App;
