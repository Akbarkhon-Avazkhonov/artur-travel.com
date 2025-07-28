"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import TestimonialData from "@/public/data/testimonial-data";
import one from "@/public/images/testimonial/client-top.png";
import two from "@/public/images/testimonial/testimonial-2.png";

const TestimonialTwo = () => {
  return (
    <section className="testimonial-section-5 fix section-bg-2 section-padding">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title style-2">
            <span data-aos-duration="800" data-aos="fade-up">
              Our Testimonial
            </span>
            <h2 data-aos-duration="800" data-aos="fade-up" data-aos-delay="300">
              Real Feedback from Our Happy
              <br /> Travelers Worldwide
            </h2>
          </div>
          <div className="test-left-top">
            <img src={"data:image/jpeg;base64,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"} alt="img" />
            <div className="content">
              <h4>4.9/5 Rating</h4>
              <p>Clients praise our exceptional work.</p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
          </div>
          <div className="col-lg-6">
            <div className="testimonial-slider-5">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                speed={2000}
                loop={true}
                modules={[Autoplay, Pagination]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  el: ".dot11",
                  clickable: true,
                }}
                className="swiper-wrapper"
              >
                {TestimonialData.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <div className="swiper-slide">
                        <div className="testimonial-box-items-4 box-shadow-none">
                     
                          <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="icon">
                            <Image src={item.quoteImg} alt={item.name} />
                          </div>
                          <h3>
                            <q>{item.quoteText}</q>
                          </h3>
                          <div className="client-info">
                            <h4>{item.name}</h4>
                            <span>from {item.location}</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="swiper-dot4 mt-4 text-center">
                <div className="dot11"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialTwo;
