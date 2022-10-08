import React from "react";
function Card({ imageUrl, name, price, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ name, price, imageUrl });
    setIsAdded(!isAdded);
  };

  return (
    <div className="card">
      <div onClick={onFavorite} className="favorite">
        <img src="/img/heart-unlike.svg" alt="Unliked" />
      </div>
      <img width={133} height={113} src={imageUrl} alt="sneakers" />
      <h5>{name}</h5>
      <div className="cardBottom d-flex justify-between align-center">
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
