import { useState } from 'react';
import store from '../../redux/store';
import { ChampionPageStateType } from '../../types';
import './championList.css';

const ChampionsList = () => {
  const IMAGE_URL =
    'https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/';
  const { getState, subscribe } = store;

  const [champions, setChampions] = useState<ChampionPageStateType | any>(
    getState().championsReducer,
  );

  subscribe(() => {
    setChampions(store.getState().championsReducer[0]);
  });

  if (!champions) return <p>Loading...</p>;

  return (
    <section className='champions--img__container'>
      {Object.keys(champions).map((name: string) => (
        <div key={name}>
          <img src={`${IMAGE_URL}${champions[name].image.full}`} alt={name} />
          <p>{name}</p>
        </div>
      ))}
    </section>
  );
};

export default ChampionsList;
