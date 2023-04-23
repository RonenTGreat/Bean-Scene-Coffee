import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import latte from "../../assets/images/latte.png";
import Testimonials from "../Testimonial/testimonial.component";

const Slide = () => {
  return (
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={100}
        style={{width: "1200px", height:"700px"}}
        loop={true}
      >
        <SwiperSlide>
          <Testimonials
            para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset....."
            name="Jonny Thomas"
            title="Project Manager"
            img={latte}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonials
            para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset....."
            name="Ronen"
            title="Software Engineer"
            img={latte}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonials
            para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset....."
            name="Ronen"
            title="Software Engineer"
            img={latte}
          />
        </SwiperSlide>
      </Swiper>
  );
};

export default Slide;
