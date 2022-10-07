import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';



function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://632620f270c3fa390f94c420.mockapi.io/vadim-sobinin/sneakers-items').then(res =>{
      return res.json();
    }).then(json => setItems(json));
  },[]);

  const onAddToCart = ((obj) => {
    setCartItems(prev => [...prev, obj]);}
  )

  return (
    <div className="App clear">

      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}

      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="" placeholder="Search..." />
          </div>
        </div>

        <div className="sneakers-cards d-flex flex-wrap">

          {
            items.map((item, index) => (
              <Card
                key={index}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                onPlus={(obj) => onAddToCart(obj)}
              />

            ))
          }

        </div>



      </div>
    </div>
  );
}

export default App;
