import "./container.styles.css";
import coffeeBeanImg from "../../assets/images/coffee-beans-flat.png";

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
    </main>
   );
}
 
export default Container;