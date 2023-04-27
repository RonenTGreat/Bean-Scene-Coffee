import "./container.styles.css";
import coffeeBeanImg from "../../assets/images/coffee-beans-flat.png";
import cappuccino from "../../assets/images/cappuccino.png";
import latte from "../../assets/images/latte.png";
import expresso from "../../assets/images/expresso.png";
import macchiato from "../../assets/images/macchiato.png";
import beans from "../../assets/images/coffee-beans-1.png";
import badge from "../../assets/images/badge-1.png";
import cup from "../../assets/images/coffee-cup-1.png";
import price from "../../assets/images/best-price-1.png";
import Coffee from "../Coffee/coffee.component";
import Benefits from "../Benefits/benefits.component";
import Slide from "../Slide/slide.component";

const Container = () => {
  return (
    <main className="container">
      <section className="info">
        <div className="info__desc">
          <h1 className="info__header">Discover the best coffee</h1>
          <p className="info__paragraph">
            Bean Scene is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood. Having
            a cup of coffee is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee more than others
            you have ever tasted.
          </p>
          <a href="/#" className="info__btn">
            Learn More
          </a>
        </div>
        <img src={coffeeBeanImg} alt="coffee beans" />
      </section>
      <div className="coffee_blast-1"></div>
      <section className="coffee__style">
        <h1 className="coffee__style-heading">
          Enjoy a new blend of coffee style
        </h1>
        <p className="coffee__style-paragraph">
          Explore all flavours of coffee with us. There is always a new cup
          worth experiencing
        </p>

        <div className="order">
          <Coffee img={cappuccino} coffee_header="Cappuccino" />
          <Coffee img={latte} coffee_header="Chai Latte" />
          <Coffee img={macchiato} coffee_header="Macchiato" />
          <Coffee img={expresso} coffee_header="Expresso" />
        </div>
      </section>
      <div className="coffee_blast-2"></div>
      <section className="coffee__benefits">
        <h1 className="coffee__style-heading">Why are we different?</h1>
        <p className="coffee__style-paragraph">
          We don’t just make your coffee, we make your day!
        </p>

        <div className="benefits">
          <Benefits
            img={beans}
            header="Supreme Beans"
            para="Beans that provides great taste"
          />
          <Benefits
            img={badge}
            header="High Quality"
            para="We provide the highest quality"
          />
          <Benefits
            img={cup}
            header="Extraordinary "
            para="Coffee like you have never tasted"
          />
          <Benefits
            img={price}
            header="Affordable Price"
            para="Our Coffee prices are easy to afford"
          />
        </div>
        <div className="benefits-join">
          <p className="coffee__style-paragraph benefits-para">
            Great ideas start with great coffee, Lets help you achieve that
          </p>
          <h4 className="coffee__style-heading">Get started today.</h4>
          <a className="info__btn" href="/#">
            Join Us
          </a>
        </div>
      </section>

      <section className="morning__coffee">
        <h1 className="morning__coffee-header">
          Get a chance to have an Amazing morning
        </h1>
        <p className="morning__coffee-para">
          We are giving you are one time opportunity to experience a better life
          with coffee.
        </p>
        <a href="/#" className="header__content_button morning__coffee-btn">
          Order Now
        </a>
        <div className="morning__coffee-overlay"></div>
        <div className="morning__coffee-cup"></div>
        <div className="morning_coffee-cofee-bg"></div>
      </section>

      <section className="testimonials">
        <h2 className="testimonials-heading">Our coffee perfection feedback</h2>
        <p className="testimonials-para">
          Our customers has amazing things to say about us
        </p>
        <Slide />
        <div className="coffee_blast-3"></div>
        <div className="coffee_blast-4"></div>
      </section>

      <section className="subcription">
        <h2 className="subcription-heading">
          Subscribe to get the Latest News
        </h2>
        <p className="subcription-para">
          Don’t miss out on our latest news, updates, tips and special offers
        </p>
        <form action="" className="subcription__form">
          <input
            type="email"
            name="email"
            placeholder="Enter your mail"
            className="subscription__form-input"
          />
          <button type="submit" className="subcription__form-btn">
            Suscribe
          </button>
        </form>
        <div className="subcription-overlay"></div>
      </section>
    </main>
  );
};

export default Container;
