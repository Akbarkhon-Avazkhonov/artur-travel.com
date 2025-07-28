import Link from "next/link";
import Image from "next/image";
import CountrySelect from "../select/CountrySelect";
import ActivitySelect from "../select/ActivitySelect";
import DatePick from "./DatePick";
import GuestSelect from "../select/GuestSelect";
import location from "@/public/images/hero/location.png";

const HeroThree = () => {
  return (
    <section
      className="hero-section hero-3 bg-cover"
      style={{
        backgroundImage: "url(https://career-advice.jobs.ac.uk/wp-content/uploads/Japan-e1634207070862-1170x630.jpg.optimal.jpg)",
      }}
    >
      <div className="container-fluid">
        <div className="row g-4 justify-content-between align-items-center">
          <div className="col-xxl-7 col-lg-6">
            <div className="hero-content">
              <h1
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="300"
                style={{ color: "#4d40ca" ,textShadow: "2px 2px 4px rgba(255, 255, 255, 0.5)" }}
              >
                travel in <br />
                your favorite destination
              </h1>
              <p
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Creating a successful digital services for innovative start-up
                and established businesses. We specialize in crafting
                unforgettable.
              </p>
              <div
                className="button-items"
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Link href="https://www.trip.com/?Allianceid=6106178&SID=242250387&trip_sub1=&trip_sub3=D4604217" className="theme-btn ">
                  <span>Check Availity</span>{" "}
                  <i className="far fa-long-arrow-right"></i>
                </Link>
                <Link href="https://www.trip.com/?Allianceid=6106178&SID=242250408&trip_sub1=&trip_sub3=D4604210" className="theme-btn bg-2 ">
                  <span>Our Location</span>{" "}
                  <i className="far fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-6 col-md-8 col-sm-10">
            <div className="destination-box-items wow img-custom-anim-left">
              <iframe
                src="https://www.trip.com/partners/ad/S4626232?Allianceid=6106178&SID=242250492&trip_sub1="
                style={{ width: "100%", height: "640px", border: "none" }}
                scrolling="no"
                id="S4626232"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroThree;
