import React from 'react';

import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://61f178ea072f86001749f21f.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((res) => setItems(res));
  }, []);

  const onAddToCart = (obj) => {
    // console.log(obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} setCartOpened={setCartOpened} />}
      <Header onClickCart={() => setCartOpened(!cartOpened)} />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block">
            <img src="/img/searchico.svg" alt="Search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
                className="clear cu-p"
                src="/img/btnremove.svg"
                alt="Clear"
              />
            )}
            <input value={searchValue} onChange={onChangeSearchInput} placeholder="Поиск ..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items &&
            items
              .filter((item) => item.name.toLowerCase().includes(searchValue))
              .map((item, index) => (
                <Card
                  item={item}
                  key={index}
                  onFavorite={() => console.log('Добавили в закладки')}
                  onPlus={(obj) => onAddToCart(obj)}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default App;
