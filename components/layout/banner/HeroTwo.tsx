import Image from "next/image";
import CountrySelect from "../select/CountrySelect";
import ActivitySelect from "../select/ActivitySelect";
import DatePick from "./DatePick";
import GuestSelect from "../select/GuestSelect";
import shape from "@/public/images/hero/new/light-shape.png";
import shapeTwo from "@/public/images/hero/new/frame-shape.png";
import plane from "@/public/images/hero/new/plane.png";
import location from "@/public/images/hero/location.png";
import thumbOne from "@/public/images/hero/new/hero-1.jpg";
import thumbTwo from "@/public/images/hero/new/hero-2.jpg";
import thumbThree from "@/public/images/hero/new/hero-3.jpg";

const HeroTwo = () => {
  return (
    <section
      className="hero-section hero-5 bg-cover"
      style={{
        backgroundImage: "url(/images/hero/new/hero-bg-shape.png)",
      }}
    >
      <div className="light-shape">
        <Image src={shape} alt="img" />
      </div>
      <div className="frame-shape">
        <Image src={shapeTwo} alt="img" />
      </div>
      <div className="container-fluid">
        <div className="row g-4">
          <div className="col-xl-8">
            <div className="hero-content">
              <h6 data-aos-duration="800" data-aos="fade-up">
                Tour & Travel Agency
              </h6>
              <h1
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <span className="shape-text">Natural</span>
                <span>World</span> <br />
                Destination
              </h1>
              <p
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Velit integer eu tincidunt scelerisque. Sodales volutpat neque
                fermentum malesuada.
              </p>
            </div>
            <div
              className="booking-list-area "
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="700"
            >
                       <iframe className="booking-list-iframe"  src="https://www.trip.com/partners/ad/S4602061?Allianceid=6033861&SID=179891006&trip_sub1="  scrolling="no"  id="S4602061"></iframe>

            </div>
          </div>
          <div className="col-xl-4">
            <div className="hero-image-items">
              <div className="row g-4">
                <div className="col-md-6">
                  <div
                    className="hero-image "
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <Image width={500} height={300} src={"https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2019-07/best_landscape_from_campsite.jpg?itok=NZ5BykXU"} alt="img" />
                  </div>
                  <div
                    className="hero-image style-2 "
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <Image width={500} height={300} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUpOMN77OlO3YQc-0-JwgFz2m6qyKleBSJew&s"} alt="img" />
                  </div>
                </div>
                <div
                  className="col-md-6 "
                  data-aos-duration="800"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="hero-image style-3">
                    <Image src={"https://www.pmtoday.co.uk/wp-content/uploads/2020/09/tiger-wildlife-animal.jpg"}  width={500} height={300} alt="img" />
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

export default HeroTwo;
