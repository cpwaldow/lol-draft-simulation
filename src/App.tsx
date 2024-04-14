import { useEffect } from 'react';
import './App.css';
import Title from './components/Title';
import { fetchChampionsList } from './services/fetchApi';

function App() {
  useEffect(() => {
    fetchChampionsList();
  }, []);

  return (
    <>
      <Title />
    </>
  );
}

export default App;
