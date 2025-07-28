import Link from "next/link";
import Image from "next/image";
import TourData from "@/public/data/tour-data";
import { title } from "process";
const tours = [
  {
    id : 1,
    title: "Hong Kong",
    div:<iframe src="https://www.trip.com/partners/ad/DB4573823?Allianceid=6096497&SID=240678789&trip_sub1="  scrolling="no" id="DB4573823" style={{height:"250px",width:"300px"}} ></iframe>
  },
  {
    id:2,
    title: "Singapore",
    div:<iframe
  src="https://www.trip.com/partners/ad/DB4574082?Allianceid=6096497&SID=240678789&trip_sub1="
  style={{ width: '300px', height: '250px', border: 'none' }}
  frameBorder="0"
  scrolling="no"
  id="DB4574082"
/>
  },
  {
    id:3,
    title: "Thailand",
    div:<iframe
  src="https://www.trip.com/partners/ad/DB4574117?Allianceid=6096497&SID=179917466&trip_sub1="
  style={{ width: '300px', height: '250px', border: 'none' }}
  frameBorder="0"
  scrolling="no"
  id="DB4574117"
/>
  },
  {
    id:4,
    title: "Cancun",
    div:<iframe
  src="https://www.trip.com/partners/ad/DB4574124?Allianceid=6096497&SID=240678789&trip_sub1="
  style={{ width: '300px', height: '250px', border: 'none' }}
  frameBorder="0"
  scrolling="no"
  id="DB4574124"
/>

  }
]
const TourSection = () => {
  return (
    <section className="tour-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span data-aos-duration="800" data-aos="fade-up">
            Featured Places
          </span>
          <h2 data-aos-duration="800" data-aos="fade-up" data-aos-delay="300">
            Amazing Hotels 
          </h2>
          <p
            className="mt-3 mt-mb-0 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Our attraction passes save you more than buying individual tickets
            for your tour <br /> package system. Our attraction passes save you
            more than.
          </p>
        </div>
        <div className="row">
          {tours.map((item) => {
            return (
              <div
                className="col-xl-3 col-lg-6 col-md-6 "
                data-aos-duration="800"
                data-aos="fade-up"
                key={item.id}
              >
                <div className="tour-box-items van-tilt">
                  <h2 style={{ fontSize: "24px", fontWeight: "700" ,padding: "15px 0",textAlign: "center"}}>{item.title}</h2>
                  {item.div}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TourSection;
