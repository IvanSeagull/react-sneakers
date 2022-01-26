function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer" style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 className=" d-flex justify-between mb-30 ">
            Корзина
            <img className="cu-p" src="/img/btnremove.svg" alt="Remove" />
          </h2>

          <div className="items flex">
            <div className="cartItem d-flex align-center mb-20">
              {/* <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" /> */}

              <div
                style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
                className="cartItemImg"></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btnremove.svg" alt="Remove" />
            </div>
            <div className="cartItem d-flex align-center mb-20">
              {/* <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" /> */}

              <div
                style={{ backgroundImage: 'url(/img/sneakers/5.jpg)' }}
                className="cartItemImg"></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btnremove.svg" alt="Remove" />
            </div>
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
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/basket.svg" /> <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/searchico.svg" alt="Search" />
            <input placeholder="Поиск ..." />
          </div>
        </div>
        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/heartunliked.svg" alt="Unliked" />
            </div>
            <img height={112} width={133} src="/img/sneakers/1.jpg" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plusbtn.svg" />
              </button>
            </div>
          </div>
          <div className="card">
            <img height={112} width={133} src="/img/sneakers/2.jpg" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plusbtn.svg" />
              </button>
            </div>
          </div>
          <div className="card">
            <img height={112} width={133} src="/img/sneakers/3.jpg" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plusbtn.svg" />
              </button>
            </div>
          </div>
          <div className="card">
            <img height={112} width={133} src="/img/sneakers/4.jpg" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plusbtn.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
