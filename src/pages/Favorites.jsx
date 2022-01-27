
import Card from "../components/Card"

function Favorites({items, onAddToFavorites}) {
  console.log(items)
    return(
        <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Мои закладки</h1>
        
        </div>
        <div className="d-flex flex-wrap">
        {items &&
            items
              .map((item, index) => (
                <Card
                  item={item}
                  key={index}
                  favorited
                  onFavorite={(obj) => onAddToFavorites(obj)}
                  // onPlus={(obj) => onAddToCart(obj)}
                />
              ))}
        </div>
      </div>
    )
    
}

export default Favorites