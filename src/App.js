import React from "react";
import {Route} from 'react-router-dom';
import axios from "axios";
import Home from './pages/Home';
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Favorites from "./pages/Favorites";

export const AppContext = React.createContext({});


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios
      .get(
        "https://632620f270c3fa390f94c420.mockapi.io/vadim-sobinin/sneakers-cart"
      );

      const favoritesResponse = await axios
      .get(
        "https://632620f270c3fa390f94c420.mockapi.io/vadim-sobinin/sneakers-favorites"
      );

      const itemsResponse = await axios
      .get(
        "https://632620f270c3fa390f94c420.mockapi.io/vadim-sobinin/sneakers-items"
      );
      
      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((itemObj) => Number(itemObj.id) === Number(obj.id))){
        axios
      .delete(
        `https://632620f270c3fa390f94c420.mockapi.io/vadim-sobinin/sneakers-cart/${obj.id}`
      );
        setCartItems(prev => prev.filter(itemObj => Number(itemObj.id) !==Number(obj.id)));
      } else {
        setCartItems((prev) => [...prev, obj]);
      axios
      .post(
        "https://632620f270c3fa390f94c420.mockapi.io/vadim-sobinin/sneakers-cart", obj
      );
      }

    } catch (error) {
      
    }
  };

  const onRemoveFromCart = (id) => {
    
    axios
      .delete(
        `https://632620f270c3fa390f94c420.mockapi.io/vadim-sobinin/sneakers-cart/${id}`
      );
    
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))){
        axios
        .delete(
          `https://632620f270c3fa390f94c420.mockapi.io/vadim-sobinin/sneakers-favorites/${obj.id}`
        );
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else{
        const {data} = await axios
        .post(
          "https://632620f270c3fa390f94c420.mockapi.io/vadim-sobinin/sneakers-favorites", obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Failed to update the favorites!");
    }
    
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, onAddToFavorite, setCartOpened, setCartItems}}>
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
           cartItems={cartItems}
           searchValue={searchValue}
           setSearchValue={setSearchValue}
           onChangeSearchInput={onChangeSearchInput}
           onAddToFavorite={onAddToFavorite}
           onAddToCart={onAddToCart}
           isLoading={isLoading}
         />
       </Route>

       <Route path="/favorites" exact>
         <Favorites />
       </Route>
      
    </div>
    </AppContext.Provider>
  );
}

export default App;
