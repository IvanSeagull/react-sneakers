import React from 'react';
import AppContext from '../context';
import axios from 'axios';
import Info from './Info';

// const delay = () => new Promise(resolve, reject) => setTimeout(resolve, 1000);

function Drawer({ setCartOpened, onRemoveItem, items }) {
  const [isOderCompleted, setIsOrderCompleted] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const { cartItems, setCartItems } = React.useContext(AppContext);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://61f178ea072f86001749f21f.mockapi.io/orders', {
        items: cartItems,
      });
      // await axios.put('https://61f178ea072f86001749f21f.mockapi.io/cart', []);

      setOrderId(data.id);
      setIsOrderCompleted(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://61f178ea072f86001749f21f.mockapi.io/cart', item.id);
        setTimeout(() => {}, 3000);
      }

      // cartItems.forEach((item) => {
      // });
    } catch (error) {
      alert('Ошибка при создании заказа =(');
    }
    setIsLoading(false);
  };

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

              <button
                disabled={isLoading}
                onClick={() => onClickOrder(true)}
                className="greenButton">
                Оформить заказ <img src="/img/buyArrow.svg" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOderCompleted ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              setIsOrderCompleted
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ'
            }
            img={isOderCompleted ? '/img/complete-order.jpg' : '/img/empty-cart.jpg'}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
