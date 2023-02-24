import "./coffee.styles.css"

const Coffee = (props) => {
  return (
    <section className="coffee__order">
      <img src={props.img} alt="coffee" />
      <div>
        <h2 className="coffee__order-header">{props.coffee_header}</h2>
        <p className="coffee__order-desc">Coffee 50% | Milk 50%</p>
        <p className="coffee__order-price">$8.50</p>
        <a className="info__btn order_btn">Order Now</a>
      </div>
    </section>
  );
}

export default Coffee;