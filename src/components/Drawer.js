function Drawer({ setCartOpened, onRemoveItem, items }) {
  console.log(items);
  return (
    <div className="overlay">
      <div className="drawer" style={{ display: 'flex', flexDirection: 'column' }}>
        <h2 className=" d-flex justify-between mb-30 ">
          Корзина
          <img
            onClick={() => setCartOpened(false)}
            className="cu-p"
            src="/img/btnremove.svg"
            alt="Remove"
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items flex">
              {items &&
                items.map((item, index) => (
                  <div key={index} className="cartItem d-flex align-center mb-20">
                    {/* <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" /> */}

                    <div
                      style={{ backgroundImage: `url(${item.imageUrl})` }}
                      className="cartItemImg"></div>
                    <div className="mr-20 flex">
                      <p className="mb-5">{item.name}</p>
                      <b>{item.price} руб.</b>
                    </div>
                    <img
                      onClick={() => onRemoveItem(item.id)}
                      className="removeBtn"
                      src="/img/btnremove.svg"
                      alt="Remove"
                    />
                  </div>
                ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li className="d-flex">
                  <span>Итого: </span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li className="d-flex">
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>

              <button className="greenButton">
                Оформить заказ <img src="/img/buyArrow.svg" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width={120} height={120} src="/img/empty-cart.jpg" />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
            <button onClick={() => setCartOpened(false)} className="greenButton">
              <img src="/img/buyArrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
