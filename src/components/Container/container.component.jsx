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

const Container = () => {
  return (
    <main className="container">
      <section className="info">
        <div className="info__desc">
          <h1 className="info__header">Discover the best coffee</h1>
          <p className="info__paragraph">
            Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.
          </p>
          <a href="/#" className="info__btn">Learn More</a>
        </div>
        <img src={coffeeBeanImg} alt="coffee beans" />
      </section>
      <div className="coffee_blast-1"></div>
      <section className="coffee__style">
        <h1 className="coffee__style-heading">Enjoy a new blend of coffee style</h1>
        <p className="coffee__style-paragraph">Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>

        <div className="order">
          <Coffee
            img={cappuccino}
            coffee_header="Cappuccino"
          />
          <Coffee
            img={latte}
            coffee_header="Chai Latte"
          />
          <Coffee
            img={macchiato}
            coffee_header="Macchiato"
          />
          <Coffee
            img={expresso}
            coffee_header="Expresso"
          />
        </div>
      </section>
      <div className="coffee_blast-2"></div>
      <section className="coffee__benefits">
        <h1 className="coffee__style-heading">Why are we different?</h1>
        <p className="coffee__style-paragraph">We don’t just make your coffee, we make your day!</p>

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
        <div>
          <p className="coffee__style-paragraph">Great ideas start with great coffee, Lets help you achieve that</p>
          <h4 className="coffee__style-heading">Get started today.</h4>
        </div>
        <a className="info__btn" href="/#">Join Us</a>

      </section>
    </main>
  );
}

export default Container;