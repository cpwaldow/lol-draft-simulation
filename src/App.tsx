import { useEffect } from 'react';
import './App.css';
import Title from './components/Title';
import store from './redux/store';
import { fetchChampionsList } from './services/fetchApi';

function App() {
  useEffect(() => {
    const handleFetch = async () => {
      const champions = await fetchChampionsList();
      store.dispatch({ type: 'SET_CHAMPIONS', payload: champions });
    };
    handleFetch();
  }, []);

  return (
    <>
      <Title />
    </>
  );
}

export default App;
