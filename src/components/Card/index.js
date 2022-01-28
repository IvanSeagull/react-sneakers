import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Card.module.scss';
import AppContext from '../../context';

function Card({ item, onPlus, onFavorite, favorited = false, loading }) {
  const { isItemAdded, isItemFavorite } = React.useContext(AppContext);

  // const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus(item);
    // setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite(item);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={250}
          viewBox="0 0 150 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="0" y="0" rx="10" ry="10" width="150" height="150" />
          <rect x="0" y="167" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="93" height="15" />
          <rect x="0" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="115" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
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
                src={isItemAdded(item.id) ? '/img/btnchecked.svg' : '/img/btnunchecked.svg'}
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
