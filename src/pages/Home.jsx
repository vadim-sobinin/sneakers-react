import Card from "../components/Card";

function Home({ items, cartItems, searchValue, onAddToCart, onAddToFavorite, setSearchValue, onChangeSearchInput, isLoading}) {

  const renderItems = () => {
    
    
    return (
      isLoading
        ? [...Array(8)]
        : items.filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
    ).map((item, index) => (
      <Card
        key={index}
        onPlus={(obj) => onAddToCart(obj)}
        onFavorite={(obj) => onAddToFavorite(obj)}
        added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Search for "${searchValue}"` : "All sneakers"}</h1>
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
        {renderItems()}
      </div>
    </div>
  );
}

export default Home;
