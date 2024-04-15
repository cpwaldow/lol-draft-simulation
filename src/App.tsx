import { useEffect } from 'react';
import './App.css';
import Title from './components/Title';
import { fetchChampionsList } from './services/fetchApi';
import store from './redux/store';
import ChampionsList from './components/ChampionsList';

function App() {
  useEffect(() => {
    (async () => {
      const champions = await fetchChampionsList();
      store.dispatch({ type: 'SET_CHAMPIONS', payload: champions.data });
    })();
  }, []);

  return (
    <>
      <Title />
      <section className='section__container'>
        <ChampionsList />
      </section>
    </>
  );
}

export default App;
