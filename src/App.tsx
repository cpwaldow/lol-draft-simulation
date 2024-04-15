import { useEffect } from 'react';
import './App.css';
import Title from './components/Title';
import { fetchChampionsList } from './services/fetchApi';
import store from './redux/store';
import ChampionsList from './components/ChampionsList';
import PickChampion from './components/PickChampion';

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
      <section className='champion--main__container'>
        <PickChampion pickOrder={[1, 4, 5, 8, 9]} />
        <ChampionsList />
        <PickChampion pickOrder={[2, 3, 6, 7, 10]} />
      </section>
    </>
  );
}

export default App;
