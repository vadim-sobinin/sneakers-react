function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">Cart <img className="removeBtn" src="/img/btn-remove.svg" alt="remove button" /></h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">

            <div style={{ backgroundImage: "url(/img/sneakers/sneakers1.jpg)" }} className="cartItemImg"></div>
            <div className="mr-50">
              <p className="mb-5">Male Sneakers<br></br>Nike Blazer Mid Suede</p>
              <b>49.99$</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove button" />
          </div>

          <div className="cartItem d-flex align-center mb-20">

            <div style={{ backgroundImage: "url(/img/sneakers/sneakers1.jpg)" }} className="cartItemImg"></div>
            <div className="mr-50">
              <p className="mb-5">Male Sneakers<br></br>Nike Blazer Mid Suede</p>
              <b>49.99$</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove button" />
          </div>

        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Total:</span>
              <div></div>
              <b>99.98$</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>4.99$</b>
            </li>
          </ul>
          <button className="greenButton">Place an order <img src="/img/arrow-right.svg" alt="go"></img></button>
        </div>

      </div>
    </div>
  )
}
export default Drawer;