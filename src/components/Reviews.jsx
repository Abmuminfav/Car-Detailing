import ReviewCard from "./ReviewCard";
import reviews from "../data/reviews";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Reviews() {
  return (
    <section className="bg-black py-20">
      {/* Title */}
      <h1 className="text-center text-4xl font-bold text-white mb-12">
        What Our Clients Say
      </h1>

      {/* Carousel */}
      <div className="max-w-[1280px] mx-auto px-4">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="h-auto">
              <ReviewCard
                name={review.name}
                text={review.text}
                rating={review.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Reviews;
