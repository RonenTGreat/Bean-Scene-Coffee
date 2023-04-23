import "./testimonial.styles.css";

const Testimonials = (props) => {
  return (
    <div className="testimonial-body">
      <span className="testimonial-quote">"</span>
      <p className="testimonial-para">{props.para}</p>

      <h3 className="testimonial-name">{props.name}</h3>
      <p className="testimonial-title">{props.title}</p>

      <img className="testimonial-img" src={props.img} alt="" />
    </div>
  );
};

export default Testimonials;
