import { PickOrderType } from '../../types';
import './pickChampion.css';

const PickChampion = ({ pickOrder }: PickOrderType) => {
  return (
    <section className='pick_champion__container'>
      {pickOrder.map((order, index) => (
        <div key={`Pick order ${order}`}>
          <div
            className='pick_champion--image__background'
            id={`${order}`}
          ></div>
          <p>Invocador {index + 1}</p>
        </div>
      ))}
    </section>
  );
};

export default PickChampion;
