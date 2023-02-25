import "./benefits.styles.css"

const Benefits = (props) => {
  return (  
    <section className="benefits__container">
      <img className="benefits__container-img" src={props.img} alt="benefits" />
      <h3 className="benefits__container-header">{props.header}</h3>
      <p className="benefits__container-paragraph">{props.para}</p>
    </section>
  );
}
 
export default Benefits;