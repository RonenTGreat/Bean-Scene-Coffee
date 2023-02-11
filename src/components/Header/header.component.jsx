import "./header.styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header_nav">
        <a className="logo" href="/#">Bean Scene</a>
        <nav className="nav">
          <ul className="nav_list">
            <li className="nav_link"><a href="">Home</a></li>
            <li className="nav_link"><a href="">Menu</a></li>
            <li className="nav_link"><a href="">About Us</a></li>
            <li className="nav_link"><a href="">Contact Us</a></li>
          </ul>
        </nav>

        <div className="register">
          <a className="register__signin" href="/#">Sign In</a>
          <a className="register__signup" href="/#">Sign Up</a>
        </div>
      </div>
      <div className="overlay"></div>
    </header>
  );
}

export default Header;