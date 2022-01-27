import Card from '../components/Card';


function Home({items, searchValue, cartItems, setSearchValue, onChangeSearchInput, onAddToFavorites, onAddToCart, isLoading}) {

    const renderItems = () => {
        const filteredItems = items
        .filter((item) => item.name.toLowerCase().includes(searchValue))

        return (isLoading ? [...Array(10)]
           : filteredItems)
              .map((item, index) => (
                <Card
                  item={item}
                  key={index}
                  onFavorite={(obj) => onAddToFavorites(obj)}
                  added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
                  loading={isLoading}
                  onPlus={(obj) => onAddToCart(obj)}
                />
              ))
    }

    return(
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
          {renderItems()}
        </div>
      </div>
    )
    
}

export default Home