import { useState } from 'react';
import store from '../../redux/store';
import './title.css';

const Title = () => {
  const [title, setTitle] = useState(store.getState().titleReducer.title);

  store.subscribe(() => {
    setTitle(store.getState().titleReducer.title);
  });
  return <h1 className='title--center'>{title}</h1>;
};

export default Title;
