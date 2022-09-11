import React from "react";
import ReviewCard from "./ReviewCard";
import "./Reviews.css";
import keller from "../../images/Avatar/thomas-1000x697.jpg";
import Winona from "../../images/Avatar/Winonas-hemp.jpg";
import JoseAndres from "../../images/Avatar/Jose_Andres_Puerta_2012_Shankbone.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import SectionCard from "../UI/SectionCard";

export default function Reviews() {
  return (
    <>
    <SectionCard title={'Reviews'} subtitle={'What people love about us'} >
        <div className="slider-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <ReviewCard src={keller} quote={"A recipe has no soul. You, as the cook, must bring soul to the recipe."} 
            name={'Thomas Keller'} />
        </SwiperSlide>
        <SwiperSlide>
            <ReviewCard src={Winona} quote={"Food for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food. Food has a culture. It has a history. It has a story. It has relationships."}
            name={'Winonas Laduke'} />
        </SwiperSlide>
        <SwiperSlide>
            <ReviewCard src={JoseAndres} quote={"I realized very early the power of food to evoke memory, to bring people together, to transport you to other places, and I wanted to be a part of that."} 
            name={'Jose Andres Puerta'} />
        </SwiperSlide>
      </Swiper>
      </div>
    </SectionCard>
    </>
  );
}
