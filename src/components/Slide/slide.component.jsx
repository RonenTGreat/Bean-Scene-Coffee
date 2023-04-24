import "./slide.styles.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import joseph from "../../assets/images/joseph.jpg";
import lee from "../../assets/images/lee.jpg";
import lisa from "../../assets/images/lisa.jpg";
import Testimonials from "../Testimonial/testimonial.component";

const Slide = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      slidesPerView={1}
      spaceBetween={100}
      style={{ width: "1200px", height: "700px" }}
      loop={true}
    >
      <SwiperSlide>
        <Testimonials
          para="This coffee is amazing! It has a rich and smooth flavor that wakes me up in the morning. It's not too bitter or acidic, and it goes well with milk and sugar. It's the best coffee I've ever tasted. I highly recommend it to anyone who likes a good cup of joe."
          name="Jonny Oscar Thomas"
          title="Project Manager"
          img={joseph}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Testimonials
          para="This coffee is very good. It has a nice aroma and a balanced taste. It's not too strong or weak, and it suits my preferences. It's a quality product that I enjoy drinking every day. I would buy it again and again."
          name="Darshan Lee Patel"
          title="Software Engineer"
          img={lee}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Testimonials
          para="This coffee is delightful! It has a sweet and creamy flavor that makes me happy. It's not too hot or cold, and it blends well with different syrups and toppings. It's a treat that I indulge in once in a while. I love it!"
          name="Lisa Mary Brown"
          title="Designer"
          img={lisa}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slide;
