
function App() {
  return (
    <div className="App clear">
      <header className="d-flex justify-between align-center p-40">
       <div className="d-flex align-center">
        <img src="/img/logo.png" width={40} height={40}/>
        <div className="headerInfo">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p>Shop for the best sneakers</p>
        </div>
       </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src="/img/cart.svg" className="mr-10" width={18} height={17}/>
            <span>20$</span>
          </li>
          <li className="mr-30">
            <img src="/img/heart.svg" width={21} height={19}/>
          </li>
          <li> 
            <img src="/img/user.svg" width={20} height={20}/>
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <h1>All sneakers</h1>
        

      ....



      </div>
    </div>
  );
}

export default App;
