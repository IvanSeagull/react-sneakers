import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState('');

  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // fetch('https://61f178ea072f86001749f21f.mockapi.io/items')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((res) => setItems(res));
    async function fetchData() {
      // setIsLoading(true);
      const cartResponse = await axios.get('https://61f178ea072f86001749f21f.mockapi.io/cart');
      const favoritesResponse = await axios.get(
        'https://61f178ea072f86001749f21f.mockapi.io/favorites',
      );
      const itemsResponse = await axios.get('https://61f178ea072f86001749f21f.mockapi.io/items');
      setIsLoading(false);
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    // console.log(obj);
    try {
      if (cartItems.find((cartObj) => Number(cartObj.id) === Number(obj.id))) {
        axios.delete(`https://61f178ea072f86001749f21f.mockapi.io/cart/${obj.id}`);

        setCartItems((prev) => prev.filter((item) => Number(item.id) != Number(obj.id)));
      } else {
        axios.post('https://61f178ea072f86001749f21f.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert('Не удалось добавить в корнзину');
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://61f178ea072f86001749f21f.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorites = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://61f178ea072f86001749f21f.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        // console.log(obj);
        const { data } = await axios.post(
          'https://61f178ea072f86001749f21f.mockapi.io/favorites',
          obj,
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты');
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} setCartOpened={setCartOpened} onRemoveItem={onRemoveItem} />
      )}
      <Header onClickCart={() => setCartOpened(!cartOpened)} />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorites={onAddToFavorites}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
            />
          }
        />

        <Route
          path="/favorites"
          exact
          element={<Favorites items={favorites} onAddToFavorites={onAddToFavorites} />}
        />
      </Routes>

      {/* 123 */}
    </div>
  );
}

export default App;
