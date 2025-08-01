import Link from "next/link";
import Image from "next/image";
import thumb from "@/public/images/about/01.jpg";

const AboutThree = () => {
  return (
    <section className="about-section-3 fix section-padding">
      <div className="container">
        <div className="about-wrapper-3">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <img src={"https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/659069748dd72e001dd80645.png"} alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title mb-0">
                  <span data-aos-duration="800" data-aos="fade-up">
                    About Travil Agency
                  </span>
                  <h2
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    Our Journey Memorable Adventures Worldwide
                  </h2>
                  <p
                    className="mt-3 "
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="130"
                  >
                    We offer carefully curated destinations and tours that
                    capture the true essence of location, ensuring you
                    experience. Our attraction pass save you more than buying
                    individual tickets for your tour package system.
                  </p>
                </div>
                <div className="about-icon-items wow img-custom-anim-left">
                  <div className="row g-4">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                      <div className="icon-items">
                        <i className="flaticon-connection"></i>
                        <h4>Use Free Wi-Fi</h4>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                      <div className="icon-items">
                        <i className="flaticon-cyber-security"></i>
                        <h4>Special Security</h4>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                      <div className="icon-items">
                        <i className="flaticon-guide"></i>
                        <h4>Special Guiding</h4>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                      <div className="icon-items">
                        <i className="flaticon-gym"></i>
                        <h4>Gym Center</h4>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                      <div className="icon-items">
                        <i className="flaticon-cycling"></i>
                        <h4>Special Security</h4>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                      <div className="icon-items">
                        <i className="flaticon-hiking"></i>
                        <h4>Special Security</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-aos-duration="800"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <Link href="https://www.trip.com/?Allianceid=6106178&SID=242250408&trip_sub1=&trip_sub3=D4604210" className="theme-btn ">
                    <span>More About Travil</span>{" "}
                    <i className="far fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutThree;
