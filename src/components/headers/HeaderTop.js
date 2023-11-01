import React from "react";
import logo from "../../images/erith_logo.png"
import { useEffect, useState } from 'react';

export default function HeaderOne () {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const textColor = isVisible ? "#1D187C" : "#fff"

  return (
      <header className="ltn__header-area ltn__header-3">
        <div className="ltn__header-top-area border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="ltn__top-bar-menu">
                  <ul>
                    <li>
                      <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                        <i className="icon-mail" style={{color: "#1D187C"}}></i> help@erithhealth.com
                      </a>
                    </li>
                    <li>
                      <a href="locations.html">
                        <i className="icon-placeholder" style={{color: "#1D187C"}}></i> No.51 Nii Nortey Palm Crescent Haatso, Accra
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="top-bar-right text-right text-end">
                  <div className="ltn__top-bar-menu">
                    <ul>
                      <li>
                        {/* ltn__language-menu  */}
                        <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                          <ul>
                            <li>
                              <a href="#" className="dropdown-toggle">
                                <span className="active-currency">English</span>
                              </a>
                              <ul>
                                <li>
                                  <a href="#">French</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        {/* <!-- ltn__social-media --> */}
                        <div className="ltn__social-media">
                          <ul>
                            <li>
                              <a href="https://www.facebook.com/erithpharma" title="Facebook" rel="noreferrer" target="_blank">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/ErithHS" title="Twitter" rel="noreferrer" target="_blank">
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.linkedin.com/company/erith-pharma-and-health-services-ltd" title="LinkedIn" rel="noreferrer" target="_blank">
                                <i className="fab fa-linkedin"></i>
                              </a>
                            </li>

                            <li>
                              <a href="https://www.instagram.com/erithhs/" title="Instagram" rel="noreferrer" target="_blank">
                                <i className="fab fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.youtube.com/channel/UCo3Ic6o_QclAN12EzEwq5nA" title="YouTube" rel="noreferrer" target="_blank">
                                <i className="fab fa-youtube"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ltn__header-top-area end --> 
        <!-- ltn__header-middle-area start --> */}
        <div className="ltn__header-middle-area">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="site-logo">
                  <a href="index.html">
                    <img src={logo} alt="Logo" style={{ width: "100px", height: "40px", objectFit: "cover" }}/>
                  </a>
                </div>
              </div>
              <div className="col header-contact-serarch-column d-none d-lg-block">
                <div className="header-contact-search">
                  {/* <!-- header-feature-item --> */}
                  <div className="header-feature-item">
                    <div className="header-feature-icon">
                      <i className="icon-call"></i>
                    </div>
                    <div className="header-feature-info">
                      <h6>Phone</h6>
                      <p>
                        <a href="tel:+233509580468">+233-50-958-0468</a>
                      </p>
                    </div>
                  </div>
                  {/* <!-- header-search-2 --> */}
                  <div className="header-search-2">
                    <form id="#123" method="get" action="#">
                      <input
                        type="text"
                        name="search"
                        placeholder="Search here..."
                      />
                      <button type="submit">
                        <span>
                          <i className="icon-search"></i>
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col">
                {/* <!-- header-options --> */}
                <div className="ltn__header-options">
                  <ul>
                    <li className="d-none">
                      {/* <!-- ltn__currency-menu --> */}
                      <div className="ltn__drop-menu ltn__currency-menu">
                        <ul>
                          <li>
                            <a href="#" className="dropdown-toggle">
                              <span className="active-currency">USD</span>
                            </a>
                            <ul>
                              <li>
                                <a href="login.html">USD - US Dollar</a>
                              </li>
                              <li>
                                <a href="wishlist.html">CAD - Canada Dollar</a>
                              </li>
                              <li>
                                <a href="register.html">EUR - Euro</a>
                              </li>
                              <li>
                                <a href="account.html">GBP - British Pound</a>
                              </li>
                              <li>
                                <a href="wishlist.html">INR - Indian Rupee</a>
                              </li>
                              <li>
                                <a href="wishlist.html">
                                  BDT - Bangladesh Taka
                                </a>
                              </li>
                              <li>
                                <a href="wishlist.html">JPY - Japan Yen</a>
                              </li>
                              <li>
                                <a href="wishlist.html">
                                  AUD - Australian Dollar
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="d-lg-none">
                      {/* <!-- header-search-1 --> */}
                      <div className="header-search-wrap">
                        <div className="header-search-1">
                          <div className="search-icon">
                            <i className="icon-search  for-search-show"></i>
                            <i className="icon-cancel  for-search-close"></i>
                          </div>
                        </div>
                        <div className="header-search-1-form">
                          <form id="#" method="get" action="#">
                            <input
                              type="text"
                              name="search"
                              placeholder="Search here..."
                            />
                            <button type="submit">
                              <span>
                                <i className="icon-search"></i>
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </li>
                    <li className="d-none---">
                      {/* <!-- user-menu --> */}
                      <div className="ltn__drop-menu user-menu">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="icon-user"></i>
                            </a>
                            <ul>
                              <li>
                                <a href="login.html">Sign in</a>
                              </li>
                              <li>
                                <a href="register.html">Register</a>
                              </li>
                              <li>
                                <a href="account.html">My Account</a>
                              </li>
                              <li>
                                <a href="wishlist.html">Wishlist</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      {/* <!-- mini-cart 2 --> */}
                      <div className="mini-cart-icon mini-cart-icon-2">
                        <a
                          href="#ltn__utilize-cart-menu"
                          className="ltn__utilize-toggle"
                        >
                          <span className="mini-cart-icon">
                            <i className="icon-shopping-cart"></i>
                            <sup>2</sup>
                          </span>
                          <h6>
                            <span>Your Cart</span>{" "}
                            <span className="ltn__secondary-color">$89.25</span>
                          </h6>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ltn__header-middle-area end -->
        <!-- header-bottom-area start --> */}
        <div className="header-bottom-area ltn__border-top ltn__header-sticky  ltn__sticky-bg-white--- ltn__sticky-bg-primary ltn__primary-bg section-bg-1 menu-color-white d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col header-menu-column justify-content-center">
                <div className="sticky-logo">
                  <div className="site-logo">
                    <a href="index.html">
                      <img src={logo} alt="Logo" style={{ width: "100px", height: "40px", objectFit: "cover" }} />
                    </a>
                  </div>
                </div>
                <div className="header-menu header-menu-2">
                  <nav>
                    <div className="ltn__main-menu">
                      <ul>
                        <li className="menu-icon">
                          <a href="#" style={{color: textColor}}>Home</a>
                          <ul className="sub-menu menu-pages-img-show ltn__sub-menu-col-2---">
                            <li>
                              <a href="index.html">Home Style 01</a>
                              <img src="img/home-demos/home-1.jpg" alt="#" />
                            </li>
                            <li>
                              <a href="index-2.html">Home Style 02</a>
                              <img src="img/home-demos/home-2.jpg" alt="#" />
                            </li>
                            <li>
                              <a href="index-3.html">Home Style 03</a>
                              <img src="img/home-demos/home-3.jpg" alt="#" />
                            </li>
                          </ul>
                        </li>
                        <li className="menu-icon">
                          <a href="#" style={{color: textColor}}>About</a>
                          <ul>
                            <li>
                              <a href="about.html">About</a>
                            </li>
                            <li>
                              <a href="service.html">Services</a>
                            </li>
                            <li>
                              <a href="service-details.html">Service Details</a>
                            </li>
                            <li>
                              <a href="portfolio.html">Gallery</a>
                            </li>
                            <li>
                              <a href="portfolio-2.html">Gallery - 02</a>
                            </li>
                            <li>
                              <a href="portfolio-details.html">
                                Gallery Details
                              </a>
                            </li>
                            <li>
                              <a href="team.html">Team</a>
                            </li>
                            <li>
                              <a href="team-details.html">Team Details</a>
                            </li>
                            <li>
                              <a href="faq.html">FAQ</a>
                            </li>
                            <li>
                              <a href="locations.html">Google Map Locations</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-icon">
                          <a href="#" style={{color: textColor}}>Shop</a>
                          <ul>
                            <li>
                              <a href="shop.html">Shop</a>
                            </li>
                            <li>
                              <a href="shop-grid.html">Shop Grid</a>
                            </li>
                            <li>
                              <a href="shop-left-sidebar.html">
                                Shop Left sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-right-sidebar.html">
                                Shop right sidebar
                              </a>
                            </li>
                            <li>
                              <a href="product-details.html">Shop details </a>
                            </li>
                            <li>
                              <a href="#">
                                Other Pages <span className="float-right"></span>
                              </a>
                              <ul>
                                <li>
                                  <a href="cart.html">Cart</a>
                                </li>
                                <li>
                                  <a href="wishlist.html">Wishlist</a>
                                </li>
                                <li>
                                  <a href="checkout.html">Checkout</a>
                                </li>
                                <li>
                                  <a href="order-tracking.html">
                                    Order Tracking
                                  </a>
                                </li>
                                <li>
                                  <a href="account.html">My Account</a>
                                </li>
                                <li>
                                  <a href="login.html">Sign in</a>
                                </li>
                                <li>
                                  <a href="register.html">Register</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-icon">
                          <a href="#" style={{color: textColor}}>Education</a>
                          <ul>
                            <li>
                              <a href="blog.html">News</a>
                            </li>
                            <li>
                              <a href="blog-grid.html">News Grid</a>
                            </li>
                            <li>
                              <a href="blog-left-sidebar.html">
                                News Left sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-right-sidebar.html">
                                News Right sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-details.html">News details</a>
                            </li>
                          </ul>
                        </li>
                        {/* <li className="menu-icon">
                          <a href="#">Pages</a>
                          <ul className="mega-menu">
                            <li>
                              <a href="#">Inner Pages</a>
                              <ul>
                                <li>
                                  <a href="portfolio.html">Gallery</a>
                                </li>
                                <li>
                                  <a href="portfolio-2.html">Gallery - 02</a>
                                </li>
                                <li>
                                  <a href="portfolio-details.html">
                                    Gallery Details
                                  </a>
                                </li>
                                <li>
                                  <a href="team.html">Team</a>
                                </li>
                                <li>
                                  <a href="team-details.html">Team Details</a>
                                </li>
                                <li>
                                  <a href="faq.html">FAQ</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Inner Pages</a>
                              <ul>
                                <li>
                                  <a href="history.html">History</a>
                                </li>
                                <li>
                                  <a href="contact.html">Appointment</a>
                                </li>
                                <li>
                                  <a href="locations.html">
                                    Google Map Locations
                                  </a>
                                </li>
                                <li>
                                  <a href="404.html">404</a>
                                </li>
                                <li>
                                  <a href="contact.html">Contact</a>
                                </li>
                                <li>
                                  <a href="coming-soon.html">Coming Soon</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Shop Pages</a>
                              <ul>
                                <li>
                                  <a href="shop.html">Shop</a>
                                </li>
                                <li>
                                  <a href="shop-left-sidebar.html">
                                    Shop Left sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-right-sidebar.html">
                                    Shop right sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-grid.html">Shop Grid</a>
                                </li>
                                <li>
                                  <a href="product-details.html">
                                    Shop details{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="cart.html">Cart</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="shop.html">
                                <img
                                  src="img/banner/menu-banner-1.png"
                                  alt="#"
                                />
                              </a>
                            </li>
                          </ul>
                        </li> */}
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
};


