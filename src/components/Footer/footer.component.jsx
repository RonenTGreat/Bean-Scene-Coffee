import "./footer.styles.css";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import youtube from "../../assets/images/youtube.png";
import twitter from "../../assets/images/twitter.png";

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
          <li>Menu</li>
          <li>Features</li>
          <li>News & Blogs</li>
          <li>Help & Supports</li>
        </ul>
      </div>

      <div className="footer-company">
        <h2>Company</h2>
        <ul>
          <li>How we work</li>
          <li>Terms of service</li>
          <li>Pricing</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div className="footer-contact-us">
        <h2>Contact Us</h2>
        <ul>
          <li>
            Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
          </li>
          <li>+1 202-918-2132</li>
          <li>beanscene@mail.com</li>
          <li>www.beanscene.com</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
