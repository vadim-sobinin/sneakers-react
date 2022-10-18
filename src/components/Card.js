import React from "react";
import ContentLoader from "react-content-loader";
import {AppContext} from "../App";


function Card({ id, imageUrl, name, price, onFavorite, onPlus, favorited = false, loading = false,}) {

  const {isItemAdded} = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  
  const onClickPlus = () => {
    onPlus({ id, name, price, imageUrl });
  };

  const onClickFavorite = () => {
    onFavorite({ id, name, price, imageUrl });
    setIsFavorite(!isFavorite);
  };



  return (
    <div className="card">
      {
        loading ? (<ContentLoader 
        speed={2}
        width={150}
        height={187}
        viewBox="0 0 150 187"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        // {...props}
      >
        <rect x="0" y="0" rx="10" ry="10" width="150" height="90" /> 
        <rect x="0" y="105" rx="2" ry="2" width="150" height="15" /> 
        <rect x="0" y="160" rx="8" ry="8" width="80" height="24" /> 
        <rect x="118" y="152" rx="8" ry="8" width="32" height="32" /> 
        <rect x="0" y="125" rx="3" ry="3" width="100" height="15" />
      </ContentLoader> ) : (<><div onClick={onClickFavorite} className="favorite">
      <img src={isFavorite ? "/img/heart-like.svg" :"/img/heart-unlike.svg"} alt="Unliked" />
    </div>
    <img width="100%" height={135} src={imageUrl} alt="sneakers" />
    <h5>{name}</h5>
    <div className="cardBottom d-flex justify-between align-center">
      <div className="d-flex flex-column ">
        <span>Price:</span>
        <b>{price}$</b>
      </div>

      <img
        style={{ cursor: "pointer" }}
        onClick={onClickPlus}
        src={isItemAdded(id) ? "/img/btn-done.svg" : "/img/btn-plus.svg"}
        alt="add"
      />
    </div></>)
      }
      
    </div>
  );
}

export default Card;
