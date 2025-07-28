import Link from "next/link";
import Image from "next/image";
import call from "@/public/images/call.png";
import percent from "@/public/images/hero/new/percent.png";
import one from "@/public/images/about/04.jpg";
import two from "@/public/images/about/05.jpg";
import three from "@/public/images/about/06.jpg";

const AboutTwo = () => {
  return (
    <section className="about-section section-padding fix">
      <div className="container">
        <div className="about-wrappper-2">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-image-2">
                <div className="percent-shape">
                  <Image src={percent} alt="img" />
                </div>
                <div className="row g-4">
                 <img src="https://www.nomadicexpeditions.com/wp-content/uploads/2023/08/contact-1024x683.jpg" alt="img"  style={{ borderRadius: "50px", width: "100%", height: "auto" }}/>

                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <span data-aos-duration="800" data-aos="fade-up">
                    About Travil Agency
                  </span>
                  <h2
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    Our Journey  <br />
                    Explore Mongolia

                  </h2>
                </div>
                <p
                  className="mt-3 mt-md-0 "
                  data-aos-duration="800"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                 We offer carefully curated destinations and tours that unveil the untamed beauty of Mongolia — from the endless steppes and majestic Gobi Desert to ancient traditions, nomadic culture, and breathtaking horizons.
                </p>
                <div className="about-area">
                  <div
                    className="about-items "
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="icon">
                      <i className="flaticon-exclusive"></i>
                    </div>
                    <div className="content">
                      <h4>Exclusive Deals On Top Destinations</h4>
                      <p>
                        Our attraction pass saves you more than buying individual tickets for your tour package system.
                      </p>
                    </div>
                  </div>
             
                </div>
                <div
                  className="author-items "
                  data-aos-duration="800"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <Link href="https://www.trip.com/t/cLTr97i9uO2" className="theme-btn">
                    <span>More About Travil</span>{" "}
                    <i className="far fa-long-arrow-right"></i>
                  </Link>
                  <div className="author-contact">
                    <div className="icon">
                      <Image src={call} alt="img" />
                    </div>
                    <div className="content">
                      <span>Call Us</span>
                      <h6>
                        <Link href="tel:+8809533309">+88 (09) 53 33 09</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
