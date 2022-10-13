import React from "react";


function Card({ id, imageUrl, name, price, onFavorite, onPlus, favorited = false}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  
  const onClickPlus = () => {
    onPlus({ name, price, imageUrl });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, name, price, imageUrl });
    setIsFavorite(!isFavorite);
  };



  return (
    <div className="card">
      <div onClick={onClickFavorite} className="favorite">
        <img src={isFavorite ? "/img/heart-like.svg" :"/img/heart-unlike.svg"} alt="Unliked" />
      </div>
      <img width={133} height={113} src={imageUrl} alt="sneakers" />
      <h5>{name}</h5>
      <div className="cardBottom d-fl`ex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Price:</span>
          <b>{price}$</b>
        </div>

        <img
          style={{ cursor: "pointer" }}
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-done.svg" : "/img/btn-plus.svg"}
          alt="add"
        />
      </div>
    </div>
  );
}

export default Card;
