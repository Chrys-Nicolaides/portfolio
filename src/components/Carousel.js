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
import TswaluCover from "../images/TswaluCover.png";
import TswaluMainBedroom from "../images/TswaluMainBedroom.png";
import TswaluMainBathroom from "../images/TswaluMainBathroom.png";
import TswaluFamilyBedroom from "../images/TswaluFamilyBedroom.png";
import TswaluPoolDeck from "../images/TswaluPoolDeck.png";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Lazy]);

const Carousel = () => {
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
      <SwiperSlide>
        <img alt="game lodge" src={TswaluCover} />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="game lodge" src={TswaluMainBedroom} />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="game lodge" src={TswaluMainBathroom} />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="game lodge" src={TswaluFamilyBedroom} />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="game lodge" src={TswaluPoolDeck} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
