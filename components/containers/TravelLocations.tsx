  import Link from "next/link";
  import Image from "next/image";
  import LocationData from "@/public/data/location-data";

  const locations = [
    {
      id:1,
      div: <iframe src="https://www.trip.com/partners/ad/SB4573543?Allianceid=6096497&SID=240678789&trip_sub1="   scrolling="no" id="SB4573543" style={{height:"300px"}}> </iframe>

    },
    {
      id:2,
      div: <iframe  src="https://www.trip.com/partners/ad/SB4573613?Allianceid=6096497&SID=240678789&trip_sub1="   scrolling="no"  id="SB4573613" style={{height:"300px"}}></iframe>
    },
    {
      id:3,
      div: <iframe  src="https://www.trip.com/partners/ad/SB4573767?Allianceid=6096497&SID=240678789&trip_sub1=" style={{height:"300px"}}  scrolling="no" id="SB4573767"></iframe>
    },
    {
      id:4,
      div: <iframe  src="https://www.trip.com/partners/ad/SB4573732?Allianceid=6096497&SID=240678523&trip_sub1=" scrolling="no" style={{height:"300px"}} id="SB4573732"></iframe>
    }


  ]
  const TravelLocations = () => {
    return (
      <section className="trending-destinations section-padding fix">
        <div className="container">
          <div className="section-title-area lg-center">
            <div className="section-title">
              <span data-aos-duration="800" data-aos="fade-up">
                Trending Destinations
              </span>
              <h2 data-aos-duration="800" data-aos="fade-up" data-aos-delay="300">
                Find What You Love
              </h2>
            </div>
            <Link
              href="https://www.trip.com/?Allianceid=6096497&SID=240678789&trip_sub1=&trip_sub3=D4556834"
              className="theme-btn theme-btn-2 "
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <span>Explore More</span>{" "}
              <i className="far fa-long-arrow-right"></i>
            </Link>
          </div>
          <div className="row">
            {locations.slice(0, 4).map((item) => {
              return (
                <div
                  className="col-xl-3 col-lg-4 col-md-6 "
                  data-aos-duration="800"
                  data-aos="fade-up"
                  key={item.id}
                >
                  <div className="trending-destinations-card-items van-tilt">
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

  export default TravelLocations;
