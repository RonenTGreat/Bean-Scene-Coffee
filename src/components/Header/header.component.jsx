import "./header.styles.css";

const Header = () => {
  return (
    <header className="header">
      <section className="header_nav">
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
      </section>
      <section className="header__content">
        <p className="header__content_paragraph-head">We’ve got your morning covered with</p>
        <h1 className="header__content-head">Coffee</h1>
        <p className="header__content_desc">It is best to start your day with a cup of coffee. Discover the
          best flavours coffee you will ever have. We provide the best
          for our customers.</p>
        <a href="/#" className="header__content_button">Order Now</a>
      </section>
      <div className="overlay"></div>
    </header>
  );
}

export default Header;