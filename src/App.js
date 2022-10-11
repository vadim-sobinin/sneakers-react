import React from "react";
import {Route} from 'react-router-dom';
import axios from "axios";
import Home from './pages/Home';
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(
        "https://632620f270c3fa390f94c420.mockapi.io/vadim-sobinin/sneakers-items"
      )
      .then((res) => {
        setItems(res.data);
      });
      
      axios
      .get(
        "https://632620f270c3fa390f94c420.mockapi.io/vadim-sobinin/sneakers-cart"
      )
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
    axios
      .post(
        "https://632620f270c3fa390f94c420.mockapi.io/vadim-sobinin/sneakers-cart", obj
      );
  };

  const onRemoveFromCart = (id) => {
    
    axios
      .delete(
        `https://632620f270c3fa390f94c420.mockapi.io/vadim-sobinin/sneakers-cart/${id}`
      );
    
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onAddToFavorite = (obj) => {
    axios
      .post(
        "https://632620f270c3fa390f94c420.mockapi.io/vadim-sobinin/sneakers-favorites", obj
      );
    setFavorites((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="App clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveFromCart}
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} />
      
      

      <Route path="/" exact>
         <Home
           items={items}
           searchValue={searchValue}
           setSearchValue={setSearchValue}
           onChangeSearchInput={onChangeSearchInput}
           onAddToFavorite={onAddToFavorite}
           onAddToCart={onAddToCart}
         />
       </Route>

       <Route path="/favorites" exact>
         <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
       </Route>
      
    </div>
  );
}

export default App;
