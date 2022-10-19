import React from 'react';
import { AppContext } from '../App';
import Info from './Info';
import axios from 'axios';


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [] }) {
  const {cartItems, setCartItems} = React.useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete ] = React.useState(false);
  const [isLoading, setIsLoading ] = React.useState(false);
  const [orderId, setOrderId ] = React.useState(null);

  const onClickOrder = async() => {
    
    try {
      setIsLoading(true);
      const {data} = await axios
    .post(
      "https://632620f270c3fa390f94c420.mockapi.io/vadim-sobinin/sneakers-orders", {items: cartItems}
    );
    setOrderId(data.id);
    setIsOrderComplete(true);
    setCartItems([]);
    
    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      await axios.delete("https://632620f270c3fa390f94c420.mockapi.io/vadim-sobinin/sneakers-cart/" + item.id);
      await delay(1000);
    }
    
    } catch (error) {
      alert("Error in order creation :(");
    }
    setIsLoading(false);
  }
  
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Cart{" "}
          <img
            onClick={onClose}
            className="removeBtn"
            src="/img/btn-remove.svg"
            alt="remove button"
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-50">
                    <p className="mb-5">{obj.name}</p>
                    <b>{obj.price}$</b>
                  </div>
                  <img
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="remove button"
                    onClick={() => onRemove(obj.id)}
                  />
                </div>
              ))}
            </div>

            <div className="cartTotalBlock mt-20">
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
              <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
                Place an order <img src="/img/arrow-right.svg" alt="go"></img>
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Order placed" : "Cart empty"}
            description={isOrderComplete ? `Your order #${orderId} will soon be transferred to courier delivery`:"Add at least one pair of sneakers to place an order."}
            image={isOrderComplete ? "/img/complete-order.jpg":"/img/empty-cart.jpg"}
          />
        )}
      </div>
    </div>
  );
}
export default Drawer;
