
function App() {
  return (
    <div className="App clear">
      <header className="d-flex justify-between align-center p-40">
       <div className="d-flex align-center">
        <img src="/img/logo.png" alt="logo" width={40} height={40}/>
        <div className="headerInfo">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p>Shop for the best sneakers</p>
        </div>
       </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src="/img/cart.svg" className="mr-10" alt="cart" width={18} height={17}/>
            <span>20$</span>
          </li>
          <li className="mr-30">
            <img src="/img/heart.svg" alt="liked" width={21} height={19}/>
          </li>
          <li> 
            <img src="/img/user.svg" alt="user-profile" width={20} height={20}/>
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <h1 className="mb-40">All sneakers</h1>
        

      <div className="card">
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



      </div>
    </div>
  );
}

export default App;
