function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img src="/img/logo.png" alt="logo" width={40} height={40} />
        <div className="headerInfo">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Shop for the best sneakers</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img src="/img/cart.svg" className="mr-10" alt="cart" width={18} height={17} />
          <span>20$</span>
        </li>
        <li className="mr-30">
          <img src="/img/heart.svg" alt="liked" width={21} height={19} />
        </li>
        <li>
          <img src="/img/user.svg" alt="user-profile" width={20} height={20} />
        </li>
      </ul>
    </header>
  )
}
export default Header;