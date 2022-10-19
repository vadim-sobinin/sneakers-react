import React from "react";
import Card from "../components/Card";
import { AppContext } from "../App";
import axios from "axios";

function Orders() {
  const {onAddToCart, onAddToFavorite} = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async() => {
      try {
        const {data} = await axios
      .get(
        "https://632620f270c3fa390f94c420.mockapi.io/vadim-sobinin/sneakers-orders"
      );
      setOrders(data.map((order) => order.items));
      setIsLoading(false);
      } catch (error) {
        alert("Error!");
      }
    })();  
  }, []);
  
  // console.log(orders);
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My orders</h1>
        
      </div>

      <div className="sneakers-cards d-flex flex-wrap">
        {orders
            .map((order, orderNumb) => (
              
              order.map((item, index) => (
                <Card
                // index ={key}
                key={index}
                onPlus={(obj) => onAddToCart(obj)}
                onFavorite={(obj) => onAddToFavorite(obj)}
                loading={isLoading}
                {...item}
              />
              ))  
            ))}
      </div>
    </div>
  );
}

export default Orders;
