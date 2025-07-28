"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import CountrySelect from "../select/CountrySelect";
import ActivitySelect from "../select/ActivitySelect";
import DatePick from "./DatePick";
import GuestSelect from "../select/GuestSelect";
import plane from "@/public/images/hero/new/plane-2.png";
import planeTwo from "@/public/images/hero/new/plane-3.png";
import location from "@/public/images/hero/location.png";

const Hero = () => {
  return (
    <section className="hero-section hero-4">
      <div className="array-button">
        <button className="array-prev">
          <i className="far fa-long-arrow-left"></i>
        </button>
        <button className="array-next">
          <i className="far fa-long-arrow-right"></i>
        </button>
      </div>

      <div className="swiper hero-slider">
        <Swiper
          slidesPerView={1}
          speed={3000}
          loop={true}
          effect={"fade"}
          modules={[EffectFade, Autoplay, Navigation]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".array-prev",
            prevEl: ".array-next",
          }}
          className="swiper-wrapper"
        >
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="hero-items">
                <div className="plane-shape">
                  <Image src={plane} alt="img" />
                </div>
                <div className="plane-shape-2">
                  <Image src={planeTwo} alt="img" />
                </div>
                <div
                  className="hero-bg bg-cover"
                  style={{
                    backgroundImage: "url(/images/hero/04.png)",
                  }}
                ></div>
                <div className="container">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="hero-content">
                        <h6 data-animation="fadeInUp" data-delay="1.3s">
                          Tour & Travel Agency
                        </h6>
                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                          <span className="shape-text">Explore</span>
                          <span>The</span> <br /> Global Worlds
                        </h1>
                        <p data-animation="fadeInUp" data-delay="1.7s">
                          Velit integer eu tincidunt scelerisque. Sodales
                          volutpat neque fermentum malesuada.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="hero-items">
                <div className="plane-shape">
                  <Image src={plane} alt="img" />
                </div>
                <div className="plane-shape-2">
                  <Image src={planeTwo} alt="img" />
                </div>
                <div
                  className="hero-bg bg-cover"
                  style={{
                    backgroundImage: "url(/images/hero/05.png)",
                  }}
                ></div>
                <div className="container">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="hero-content">
                        <h6 data-animation="fadeInUp" data-delay="1.3s">
                          Tour & Travel Agency
                        </h6>
                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                          <span className="shape-text">Explore</span>
                          <span>The</span> <br /> Global Worlds
                        </h1>
                        <p data-animation="fadeInUp" data-delay="1.7s">
                          Velit integer eu tincidunt scelerisque. Sodales
                          volutpat neque fermentum malesuada.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container">
        <div className="booking-list-area-1">
          <iframe className="booking-list-iframe" src="https://au.trip.com/partners/ad/S4555973?Allianceid=6096497&SID=185240735&trip_sub1="  id="S4555973"></iframe>
        </div>
      </div>
    </section>
  );
};

export default Hero;
