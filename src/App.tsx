import { useEffect } from 'react';
import './App.css';
import Title from './components/Title';
import { fetchChampionsList } from './services/fetchApi';
import store from './redux/store';

function App() {
  useEffect(() => {
    (async () => {
      const champions = await fetchChampionsList();
      store.dispatch({ type: 'SET_CHAMPIONS', payload: champions });
    })();
  }, []);

  return (
    <>
      <Title />
    </>
  );
}

export default App;
