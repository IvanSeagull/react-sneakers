import React from 'react';
import styles from './Card.module.scss';

function Card({ item, onPlus, onFavorite }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onClickPlus = () => {
    onPlus(item);
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={() => onClickFavorite()}>
        <img src={isFavorite ? '/img/heartliked.svg' : '/img/heartunliked.svg'} alt="Unliked" />
      </div>
      <img height={112} width={133} src={item.imageUrl} />
      <h5>{item.name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{item.price} руб.</b>
        </div>
        <button onClick={() => onClickPlus()} className="button">
          <img
            className={styles.plus}
            width={32}
            height={32}
            src={isAdded ? '/img/btnchecked.svg' : '/img/btnunchecked.svg'}
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
