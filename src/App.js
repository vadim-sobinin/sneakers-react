import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';


const arr = [
  {name: 'Male Sneakers Nike Blazer Mid Suede', price: 49.99, imageUrl: "/img/sneakers/sneakers1.jpg"},
  {name: 'Male Sneakers Nike Air Max 270', price: 59.99, imageUrl: "/img/sneakers/sneakers2.jpg"},
  {name: 'Male Sneakers Nike Blazer Mid Suede', price: 39.99, imageUrl: "/img/sneakers/sneakers3.jpg"},
  {name: 'Male Sneakers Puma X Aka Boku Future Rider', price: 39.99, imageUrl: "/img/sneakers/sneakers4.jpg"},
  
];


function App() {

  const [cartOpened, setCartOpened] = React.useState(false);

  return (
    <div className="App clear">

      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}

      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="" placeholder="Search..." />
          </div>
        </div>

        <div className="sneakers-cards d-flex">
          
          {
            arr.map((obj) => (
              <Card 
                title={obj.name}
                price={obj.price}
                imageUrl={obj.imageUrl} 
                />
              
            ))
          }

        </div>



      </div>
    </div>
  );
}

export default App;
