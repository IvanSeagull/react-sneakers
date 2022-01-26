import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />

      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/searchico.svg" alt="Search" />
            <input placeholder="Поиск ..." />
          </div>
        </div>
        <div style={{ flexWrap: 'wrap' }} className="d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
          {/* <Card /> */}

          {/* <div className="card">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
