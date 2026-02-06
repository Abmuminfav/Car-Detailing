import ReviewCard from "./ReviewCard";
import reviews from "../data/reviews";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Reviews(){
    return(
        <div className="bg-black">
            <div className="min-h-screen max-w-[1280px] mx-auto flex flex-col md:flex-row text-center justify-center items-center gap-10">
               <Swiper spaceBetween={0} slidesPerView={1} centeredSlides breakpoints={{760:{
                slidesPerView:2,
               },
               1024:{
                slidesPerView:3,
               }}}>
                {reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                        <ReviewCard name={review.name} text={review.text}/>
                    </SwiperSlide>
                ))}
               </Swiper>
            </div>
        </div>
    )
}

export default Reviews