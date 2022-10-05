function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unlike.svg" alt="Unliked" />
      </div>
      <img width={133} height={113} src="/img/sneakers/sneakers1.jpg" alt="sneakers" />
      <h5>Male Sneakers <br />Nike Blazer Mid Suede</h5>
      <div className="cardBottom d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Price:</span>
          <b>49.99$</b>
        </div>
        <button className="button">
          <img src="/img/plus.svg" alt="add" width={11} height={11} />
        </button>
      </div>
    </div>
  )
}

export default Card;