import React from "react"
import Card from "../components/Card"
import AppContext from "../context";

function Favorites({onAddToFavorites}) {
  const {favorites} = React.useContext(AppContext);
  // console.log(state)
    return(
        <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Мои закладки</h1>
        
        </div>
        <div className="d-flex flex-wrap">
        {favorites &&
            favorites
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