"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Gallery from "./Gallery";
import logo from "@/public/images/logo/black-logo.svg";
import call from "@/public/images/call.png";
import mail from "@/public/images/mail.png";
import apple from "@/public/images/apply-store.png";
import android from "@/public/images/play-store.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const isIndex2Page = pathname === "/index-2";

  const backgroundImage = isIndex2Page
    ? "/images/footer/bg-image-2.jpg"
    : "/images/footer/bg-image.jpg";

  return (
    <footer
      className="footer-section fix section-bg bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="container">
        <div className="footer-newsletter-items">
          <h2>Get Updated the Our Latest Newsletter</h2>
          <div className="footer-input">
            <input type="email" id="email2" placeholder="Enter your email" />
            <button className="newsletter-btn" type="submit">
              Subscribe <i className="far fa-search"></i>
            </button>
          </div>
        </div>
        <div className="footer-wrapper">
          <div className="row">
            <div className="col-xl-5 col-lg-7 col-md-12">
              <div className="footer-widget-items">
                <div className="widget-title">
                  <Link href="/" className="footer-logo">
                    <Image src={logo} alt="img" />
                  </Link>
                </div>
                <div className="footer-content">
                  <div className="contact-info-items">
                    <div className="contact-items">
                      <div className="icon">
                        <Image src={call} alt="img" />
                      </div>
                      <div className="content">
                        <span>Call Us</span>
                        <h6>
                          <Link href="tel:+88451575">+88 (04) 51 57 5</Link>
                        </h6>
                      </div>
                    </div>
                    <div className="contact-items">
                      <div className="icon">
                        <Image src={mail} alt="img" />
                      </div>
                      <div className="content">
                        <span>Mail Us</span>
                        <h6>
                          <Link href="mailto:info@artut-travel.com">
                            info@artut-travel.com
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <h6 className="app-text">Your all-in-one travel app</h6>
                  <div className="apps-items">
                    <Link href="/contact">
                      <Image src={apple} alt="img" />
                    </Link>
                    <Link href="/contact">
                      <Image src={android} alt="img" />
                    </Link>
                  </div>
                  <div className="social-icon">
                    <Link href="/">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link href="/">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link href="/">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href="/">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-md-4 col-sm-6">
              <div className="footer-widget-items">
                <div className="widget-title">
                  <h3>Useful Links</h3>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="/destination">All Destination</Link>
                  </li>
                  <li>
                    <Link href="/contact">24/7 Support</Link>
                  </li>
                  <li>
                    <Link href="/team">Our Team</Link>
                  </li>
                  <li>
                    <Link href="/tour">Tour Places</Link>
                  </li>
                  <li>
                    <Link href="/contact">Reviews</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
              <div className="footer-widget-items">
                <div className="widget-title">
                  <h3>About Travil</h3>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="/">About Us</Link>
                  </li>
                  <li>
                    <Link href="/">Legal Notice</Link>
                  </li>
                  <li>
                    <Link href="/">Terms & Condition</Link>
                  </li>
                  <li>
                    <Link href="/">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/">Apple Store</Link>
                  </li>
                </ul>
              </div>
            </div>
    
          </div>
        </div>
      </div>
      <div className="footer-bottom-1">
        <div className="container">
          <div className="footer-bottom-wrapper">
            <p>&copy; {currentYear} Travil LLC All rights reserved.</p>
            <ul className="footer-menu wow fadeInUp" data-aos-delay="500">
              <li>
                <Link href="/">Privacy</Link>
              </li>
              <li>
                <Link href="/">Terms</Link>
              </li>
              <li>
                <Link href="/">Site Map</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
