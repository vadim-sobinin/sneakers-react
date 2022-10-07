import React from "react";
function Card(obj) {

  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };


  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unlike.svg" alt="Unliked" />
      </div>
      <img width={133} height={113} src={obj.imageUrl} alt="sneakers" />
      <h5>{obj.title}</h5>
      <div className="cardBottom d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Price:</span>
          <b>{obj.price}$</b>
        </div>
        
          <img style={{cursor : "pointer"}} onClick={onClickPlus} src={isAdded ? "/img/btn-done.svg" : "/img/btn-plus.svg"} alt="add"  />
        
      </div>
    </div>
  )
}

export default Card;