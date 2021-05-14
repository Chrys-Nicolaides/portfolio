import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Lazy,
} from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Lazy]);

const Carousel = (props) => {
  const { images } = props;

  const carouselImages = images?.map((image, alt) => (
    <SwiperSlide>
      <img alt={alt} src={image} />
    </SwiperSlide>
  ));

  return (
    <Swiper
      autoHeight={true}
      resizeObserver={true}
      centeredSlides={true}
      spaceBetween={50}
      slidesPerView={1}
      lazy={true}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="rounded-md "
    >
      {carouselImages}
    </Swiper>
  );
};

export default Carousel;
