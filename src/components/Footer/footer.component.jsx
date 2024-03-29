import "./footer.styles.css";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import youtube from "../../assets/images/youtube.png";
import twitter from "../../assets/images/twitter.png";
import cup_1 from "../../assets/images/coffee-drink-1.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h2 className="footer-info-header">Bean Scene</h2>
        <p className="footer-info-para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="socials">
          <a href="">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="">
            <img src={twitter} alt="twitter" />
          </a>
        </div>
      </div>

      <div className="footer-about">
        <h2>About</h2>
        <ul>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">News & Blogs</a>
          </li>
          <li>
            <a href="">Help & Supports</a>
          </li>
        </ul>
      </div>

      <div className="footer-company">
        <h2>Company</h2>
        <ul>
          <li>
            <a href="">How we work</a>
          </li>
          <li>
            <a href="">Terms of service</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
      </div>

      <div className="footer-contact-us">
        <h2>Contact Us</h2>
        <ul>
          <li>
            Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
          </li>
          <li>
            <a href="">+1 202-918-2132</a>
          </li>
          <li>
            <a href="">beanscene@mail.com</a>
          </li>
          <li>
            <a href="">www.beanscene.com</a>
          </li>
        </ul>
      </div>
      <img src={cup_1} className="footer-cup-1" />
      <img src={cup_1} className="footer-cup-2" />
    </footer>
  );
};

export default Footer;
