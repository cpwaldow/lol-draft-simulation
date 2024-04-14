import store from '../redux/store';

export const fetchChampionsList = async () => {
  const API_URL =
    'https://ddragon.leagueoflegends.com/cdn/14.4.1/data/pt_BR/champion.json';
  const response = await fetch(API_URL);
  const data = await response.json();
  store.dispatch({ type: 'SET_CHAMPIONS', payload: data });
};
