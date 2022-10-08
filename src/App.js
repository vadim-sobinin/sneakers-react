import React from "react";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
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

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="App clear">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveFromCart} />
      )}

      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {searchValue ? `Search for "${searchValue}"` : "All sneakers"}
          </h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clear removeBtn"
                src="/img/btn-remove.svg"
                alt="Clear"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              type=""
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="sneakers-cards d-flex flex-wrap">
          {items
            .filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase(``))
            )
            .map((item, index) => (
              <Card
                key={index}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
