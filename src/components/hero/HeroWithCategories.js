import React from "react";
import logo from "../../images/erith_logo.png"

export default function HeroWithCategories() {
  return (
    <>
      {/* <!-- MOBILE MENU START --> */}
      <div className="mobile-header-menu-fullwidth mb-30 d-block d-lg-none">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Mobile Menu Button --> */}
              <div className="mobile-menu-toggle d-lg-none">
                <span>MENU</span>
                <a
                  href="#ltn__utilize-mobile-menu"
                  className="ltn__utilize-toggle"
                >
                  <svg viewBox="0 0 800 600">
                    <path
                      d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                      id="top"
                    ></path>
                    <path d="M300,320 L540,320" id="middle"></path>
                    <path
                      d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                      id="bottom"
                      transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- MOBILE MENU END --> */}

      {/* <!-- Utilize Cart Menu Start --> */}
      <div
        id="ltn__utilize-cart-menu"
        className="ltn__utilize ltn__utilize-cart-menu"
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <span className="ltn__utilize-menu-title">Cart</span>
            <button className="ltn__utilize-close">×</button>
          </div>
          <div className="mini-cart-product-area ltn__scrollbar">
            <div className="mini-cart-item clearfix">
              <div className="mini-cart-img">
                <a href="#">
                  <img src="img/product/1.png" alt="Image" />
                </a>
                <span className="mini-cart-item-delete">
                  <i className="icon-cancel"></i>
                </span>
              </div>
              <div className="mini-cart-info">
                <h6>
                  <a href="#">Antiseptic Spray</a>
                </h6>
                <span className="mini-cart-quantity">1 x $65.00</span>
              </div>
            </div>
            <div className="mini-cart-item clearfix">
              <div className="mini-cart-img">
                <a href="#">
                  <img src="img/product-2/2.png" alt="Image" />
                </a>
                <span className="mini-cart-item-delete">
                  <i className="icon-cancel"></i>
                </span>
              </div>
              <div className="mini-cart-info">
                <h6>
                  <a href="#">Digital Stethoscope</a>
                </h6>
                <span className="mini-cart-quantity">1 x $85.00</span>
              </div>
            </div>
            <div className="mini-cart-item clearfix">
              <div className="mini-cart-img">
                <a href="#">
                  <img src="img/product/3.png" alt="Image" />
                </a>
                <span className="mini-cart-item-delete">
                  <i className="icon-cancel"></i>
                </span>
              </div>
              <div className="mini-cart-info">
                <h6>
                  <a href="#">Cosmetic Containers</a>
                </h6>
                <span className="mini-cart-quantity">1 x $92.00</span>
              </div>
            </div>
            <div className="mini-cart-item clearfix">
              <div className="mini-cart-img">
                <a href="#">
                  <img src="img/product/4.png" alt="Image" />
                </a>
                <span className="mini-cart-item-delete">
                  <i className="icon-cancel"></i>
                </span>
              </div>
              <div className="mini-cart-info">
                <h6>
                  <a href="#">Thermometer Gun</a>
                </h6>
                <span className="mini-cart-quantity">1 x $68.00</span>
              </div>
            </div>
          </div>
          <div className="mini-cart-footer">
            <div className="mini-cart-sub-total">
              <h5>
                Subtotal: <span>$310.00</span>
              </h5>
            </div>
            <div className="btn-wrapper">
              <a href="cart.html" className="theme-btn-1 btn btn-effect-1">
                View Cart
              </a>
              <a href="cart.html" className="theme-btn-2 btn btn-effect-2">
                Checkout
              </a>
            </div>
            <p>Free Shipping on All Orders Over $100!</p>
          </div>
        </div>
      </div>
      {/* <!-- Utilize Cart Menu End --> */}

      {/* <!-- Utilize Mobile Menu Start --> */}
      <div
        id="ltn__utilize-mobile-menu"
        className="ltn__utilize ltn__utilize-mobile-menu"
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <div className="site-logo">
              <a href="index.html">
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: "100px", height: "40px", objectFit: "cover" }}
                />
              </a>
            </div>
            <button className="ltn__utilize-close">×</button>
          </div>
          <div className="ltn__utilize-menu-search-form">
            <form action="#">
              <input type="text" placeholder="Search..." />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
          <div className="ltn__utilize-menu">
            <ul>
              <li>
                <a href="#">Home</a>
                <ul className="sub-menu">
                  <li>
                    <a href="index.html">Home Style 01</a>
                  </li>
                  <li>
                    <a href="index-2.html">Home Style 02</a>
                  </li>
                  <li>
                    <a href="index-3.html">Home Style 03</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">About</a>
                <ul className="sub-menu">
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
                    <a href="portfolio.html">Portfolio</a>
                  </li>
                  <li>
                    <a href="portfolio-2.html">Portfolio - 02</a>
                  </li>
                  <li>
                    <a href="portfolio-details.html">Portfolio Details</a>
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
              <li>
                <a href="#">Shop</a>
                <ul className="sub-menu">
                  <li>
                    <a href="shop.html">Shop</a>
                  </li>
                  <li>
                    <a href="shop-grid.html">Shop Grid</a>
                  </li>
                  <li>
                    <a href="shop-left-sidebar.html">Shop Left sidebar</a>
                  </li>
                  <li>
                    <a href="shop-right-sidebar.html">Shop right sidebar</a>
                  </li>
                  <li>
                    <a href="product-details.html">Shop details </a>
                  </li>
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
                    <a href="order-tracking.html">Order Tracking</a>
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
              <li>
                <a href="#">News</a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog.html">News</a>
                  </li>
                  <li>
                    <a href="blog-grid.html">News Grid</a>
                  </li>
                  <li>
                    <a href="blog-left-sidebar.html">News Left sidebar</a>
                  </li>
                  <li>
                    <a href="blog-right-sidebar.html">News Right sidebar</a>
                  </li>
                  <li>
                    <a href="blog-details.html">News details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Pages</a>
                <ul className="sub-menu">
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
                    <a href="portfolio.html">Portfolio</a>
                  </li>
                  <li>
                    <a href="portfolio-2.html">Portfolio - 02</a>
                  </li>
                  <li>
                    <a href="portfolio-details.html">Portfolio Details</a>
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
                    <a href="history.html">History</a>
                  </li>
                  <li>
                    <a href="add-listing.html">Add Listing</a>
                  </li>
                  <li>
                    <a href="locations.html">Google Map Locations</a>
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
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
            <ul>
              <li>
                <a href="account.html" title="My Account">
                  <span className="utilize-btn-icon">
                    <i className="far fa-user"></i>
                  </span>
                  My Account
                </a>
              </li>
              <li>
                <a href="wishlist.html" title="Wishlist">
                  <span className="utilize-btn-icon">
                    <i className="far fa-heart"></i>
                    <sup>3</sup>
                  </span>
                  Wishlist
                </a>
              </li>
              <li>
                <a href="cart.html" title="Shoping Cart">
                  <span className="utilize-btn-icon">
                    <i className="fas fa-shopping-cart"></i>
                    <sup>5</sup>
                  </span>
                  Shoping Cart
                </a>
              </li>
            </ul>
          </div>
          <div className="ltn__social-media-2">
            <ul>
              <li>
                <a href="#" title="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Linkedin">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- Utilize Mobile Menu End --> */}
      <div className="ltn__utilize-overlay"></div>

      {/* <!-- SLIDER AREA START (slider-3) --> */}
      <div className="ltn__slider-area ltn__slider-3---  section-bg-1--- mt-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              {/* <!-- CATEGORY-MENU-LIST START --> */}
              <div className="ltn__category-menu-wrap">
                <div className="ltn__category-menu-title">
                  <h2 className="section-bg-1 ltn__primary-bg text-color-white">
                    categories
                  </h2>
                </div>
                <div className="ltn__category-menu-toggle ltn__one-line-active">
                  <ul>
                    {/* <!-- Submenu Column - unlimited --> */}
                    <li className="ltn__category-menu-item ltn__category-menu-drop">
                      <a href="shop.html">
                        <i className="icon-shopping-bags"></i>Health Care{" "}
                      </a>
                      <ul className="ltn__category-submenu ltn__category-column-5">
                        <li className="ltn__category-submenu-title ltn__category-menu-drop">
                          <a href="#">Health Care</a>
                          <ul className="ltn__category-submenu-children">
                            <li>
                              <a href="#">
                                Clutches Clutches Clutches Clutches{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">Cross Body</a>
                            </li>
                            <li>
                              <a href="#">Satchels</a>
                            </li>
                            <li>
                              <a href="#">Sholuder</a>
                            </li>
                            <li>
                              <a href="#">Toter</a>
                            </li>
                          </ul>
                        </li>
                        <li className="ltn__category-submenu-title ltn__category-menu-drop">
                          <a href="#">First Aid</a>
                          <ul className="ltn__category-submenu-children">
                            <li>
                              <a href="#">Clutches</a>
                            </li>
                            <li>
                              <a href="#">Cross Body</a>
                            </li>
                            <li>
                              <a href="#">Satchels</a>
                            </li>
                            <li>
                              <a href="#">Sholuder</a>
                            </li>
                            <li>
                              <a href="#">Toter</a>
                            </li>
                          </ul>
                        </li>
                        <li className="ltn__category-submenu-title ltn__category-menu-drop">
                          <a href="#">Surgical Product</a>
                          <ul className="ltn__category-submenu-children">
                            <li>
                              <a href="#">Clutches</a>
                            </li>
                            <li>
                              <a href="#">Cross Body</a>
                            </li>
                            <li>
                              <a href="#">Satchels</a>
                            </li>
                            <li>
                              <a href="#">Sholuder</a>
                            </li>
                            <li>
                              <a href="#">Toter</a>
                            </li>
                          </ul>
                        </li>
                        <li className="ltn__category-submenu-title ltn__category-menu-drop">
                          <a href="#">Diagnostic Product</a>
                          <ul className="ltn__category-submenu-children">
                            <li>
                              <a href="#">Clutches</a>
                            </li>
                            <li>
                              <a href="#">Cross Body</a>
                            </li>
                            <li>
                              <a href="#">Satchels</a>
                            </li>
                            <li>
                              <a href="#">Sholuder</a>
                            </li>
                            <li>
                              <a href="#">Toter</a>
                            </li>
                          </ul>
                        </li>
                        <li className="ltn__category-submenu-title ltn__category-menu-drop">
                          <a href="#">Laboratory Product</a>
                          <ul className="ltn__category-submenu-children">
                            <li>
                              <a href="#">Clutches</a>
                            </li>
                            <li>
                              <a href="#">Cross Body</a>
                            </li>
                            <li>
                              <a href="#">Satchels</a>
                            </li>
                            <li>
                              <a href="#">Sholuder</a>
                            </li>
                            <li>
                              <a href="#">Toter</a>
                            </li>
                          </ul>
                        </li>
                        <li className="ltn__category-submenu-title ltn__category-menu-drop">
                          <a href="#">Handbags</a>
                          <ul className="ltn__category-submenu-children">
                            <li>
                              <a href="#">Clutches</a>
                            </li>
                            <li>
                              <a href="#">Cross Body</a>
                            </li>
                            <li>
                              <a href="#">Satchels</a>
                            </li>
                            <li>
                              <a href="#">Sholuder</a>
                            </li>
                            <li>
                              <a href="#">Toter</a>
                            </li>
                          </ul>
                        </li>
                        <li className="ltn__category-submenu-title ltn__category-menu-drop">
                          <a href="#">Handbags</a>
                          <ul className="ltn__category-submenu-children">
                            <li>
                              <a href="#">Clutches</a>
                            </li>
                            <li>
                              <a href="#">Cross Body</a>
                            </li>
                            <li>
                              <a href="#">Satchels</a>
                            </li>
                            <li>
                              <a href="#">Sholuder</a>
                            </li>
                            <li>
                              <a href="#">Toter</a>
                            </li>
                          </ul>
                        </li>
                        <li className="ltn__category-submenu-title ltn__category-menu-drop">
                          <a href="#">Handbags</a>
                          <ul className="ltn__category-submenu-children">
                            <li>
                              <a href="#">Clutches</a>
                            </li>
                            <li>
                              <a href="#">Cross Body</a>
                            </li>
                            <li>
                              <a href="#">Satchels</a>
                            </li>
                            <li>
                              <a href="#">Sholuder</a>
                            </li>
                            <li>
                              <a href="#">Toter</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    {/* <!-- Submenu Column - 4 --> */}
                    <li className="ltn__category-menu-item ltn__category-menu-drop">
                      <a href="shop.html">
                        <i className="icon-options"></i>First Aid{" "}
                      </a>
                      <ul className="ltn__category-submenu ltn__category-column-4">
                        <li className="ltn__category-submenu-title ltn__category-menu-drop">
                          <a href="#">Handbags</a>
                          <ul className="ltn__category-submenu-children">
                            <li>
                              <a href="#">Clutches</a>
                            </li>
                            <li>
                              <a href="#">Cross Body</a>
                            </li>
                            <li>
                              <a href="#">Satchels</a>
                            </li>
                            <li>
                              <a href="#">Sholuder</a>
                            </li>
                            <li>
                              <a href="#">Toter</a>
                            </li>
                          </ul>
                        </li>
                        <li className="ltn__category-submenu-title ltn__category-menu-drop">
                          <a href="#">Handbags</a>
                          <ul className="ltn__category-submenu-children">
                            <li>
                              <a href="#">Clutches</a>
                            </li>
                            <li>
                              <a href="#">Cross Body</a>
                            </li>
                            <li>
                              <a href="#">Satchels</a>
                            </li>
                            <li>
                              <a href="#">Sholuder</a>
                            </li>
                            <li>
                              <a href="#">Toter</a>
                            </li>
                          </ul>
                        </li>
                        <li className="ltn__category-submenu-title ltn__category-menu-drop">
                          <a href="#">Handbags</a>
                          <ul className="ltn__category-submenu-children">
                            <li>
                              <a href="#">Clutches</a>
                            </li>
                            <li>
                              <a href="#">Cross Body</a>
                            </li>
                            <li>
                              <a href="#">Satchels</a>
                            </li>
                            <li>
                              <a href="#">Sholuder</a>
                            </li>
                            <li>
                              <a href="#">Toter</a>
                            </li>
                          </ul>
                        </li>
                        <li className="ltn__category-submenu-title ltn__category-menu-drop">
                          <a href="#">Handbags</a>
                          <ul className="ltn__category-submenu-children">
                            <li>
                              <a href="#">Clutches</a>
                            </li>
                            <li>
                              <a href="#">Cross Body</a>
                            </li>
                            <li>
                              <a href="#">Satchels</a>
                            </li>
                            <li>
                              <a href="#">Sholuder</a>
                            </li>
                            <li>
                              <a href="#">Toter</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    {/* <!-- Submenu Column - 3 --> */}
                    <li className="ltn__category-menu-item ltn__category-menu-drop">
                      <a href="shop.html">
                        <i className="icon-award"></i>Surgical Product
                      </a>
                      <ul className="ltn__category-submenu ltn__category-column-3">
                        <li className="ltn__category-submenu-title ltn__category-menu-drop">
                          <a href="#">Handbags</a>
                          <ul className="ltn__category-submenu-children">
                            <li>
                              <a href="#">Clutches</a>
                            </li>
                            <li>
                              <a href="#">Cross Body</a>
                            </li>
                            <li>
                              <a href="#">Satchels</a>
                            </li>
                            <li>
                              <a href="#">Sholuder</a>
                            </li>
                            <li>
                              <a href="#">Toter</a>
                            </li>
                          </ul>
                        </li>
                        <li className="ltn__category-submenu-title ltn__category-menu-drop">
                          <a href="#">Handbags</a>
                          <ul className="ltn__category-submenu-children">
                            <li>
                              <a href="#">Clutches</a>
                            </li>
                            <li>
                              <a href="#">Cross Body</a>
                            </li>
                            <li>
                              <a href="#">Satchels</a>
                            </li>
                            <li>
                              <a href="#">Sholuder</a>
                            </li>
                            <li>
                              <a href="#">Toter</a>
                            </li>
                          </ul>
                        </li>
                        <li className="ltn__category-submenu-title ltn__category-menu-drop">
                          <a href="#">Handbags</a>
                          <ul className="ltn__category-submenu-children">
                            <li>
                              <a href="#">Clutches</a>
                            </li>
                            <li>
                              <a href="#">Cross Body</a>
                            </li>
                            <li>
                              <a href="#">Satchels</a>
                            </li>
                            <li>
                              <a href="#">Sholuder</a>
                            </li>
                            <li>
                              <a href="#">Toter</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    {/* <!-- Submenu Column - 2 --> */}
                    <li className="ltn__category-menu-item ltn__category-menu-drop">
                      <a href="shop.html">
                        <i className="icon-user"></i>Diagnostic Product
                      </a>
                      <ul className="ltn__category-submenu ltn__category-column-2">
                        <li className="ltn__category-submenu-title ltn__category-menu-drop">
                          <a href="#">Handbags</a>
                          <ul className="ltn__category-submenu-children">
                            <li>
                              <a href="#">Clutches</a>
                            </li>
                            <li>
                              <a href="#">Cross Body</a>
                            </li>
                            <li>
                              <a href="#">Satchels</a>
                            </li>
                            <li>
                              <a href="#">Sholuder</a>
                            </li>
                            <li>
                              <a href="#">Toter</a>
                            </li>
                          </ul>
                        </li>
                        <li className="ltn__category-submenu-title ltn__category-menu-drop">
                          <a href="#">Handbags</a>
                          <ul className="ltn__category-submenu-children">
                            <li>
                              <a href="#">Clutches</a>
                            </li>
                            <li>
                              <a href="#">Cross Body</a>
                            </li>
                            <li>
                              <a href="#">Satchels</a>
                            </li>
                            <li>
                              <a href="#">Sholuder</a>
                            </li>
                            <li>
                              <a href="#">Toter</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    {/* <!-- Submenu --> */}
                    <li className="ltn__category-menu-item ltn__category-menu-drop">
                      <a href="shop.html">
                        <i className="icon-shopping-cart"></i>Laboratory Product
                      </a>
                      <ul className="ltn__category-submenu">
                        <li className="ltn__category-submenu-title ltn__category-menu-drop">
                          <a href="#">Handbags</a>
                          <ul className="ltn__category-submenu-children">
                            <li>
                              <a href="#">Clutches</a>
                            </li>
                            <li>
                              <a href="#">Cross Body</a>
                            </li>
                            <li>
                              <a href="#">Satchels</a>
                            </li>
                            <li>
                              <a href="#">Sholuder</a>
                            </li>
                            <li>
                              <a href="#">Toter</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    {/* <!-- Submenu --> */}
                    <li className="ltn__category-menu-item ltn__category-menu-drop">
                      <a href="shop.html">
                        <i className="icon-tag"></i>Hospital Products
                      </a>
                      <ul className="ltn__category-submenu">
                        <li className="ltn__category-submenu-title ltn__category-menu-drop">
                          <a href="#">Handbags</a>
                          <ul className="ltn__category-submenu-children">
                            <li>
                              <a href="#">Clutches</a>
                            </li>
                            <li>
                              <a href="#">Cross Body</a>
                            </li>
                            <li>
                              <a href="#">Satchels</a>
                            </li>
                            <li>
                              <a href="#">Sholuder</a>
                            </li>
                            <li>
                              <a href="#">Toter</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    {/* <!-- Submenu --> */}
                    <li className="ltn__category-menu-item ltn__category-menu-drop">
                      <a href="shop.html">
                        <i className="icon-shopping-bags"></i>Service & Setup{" "}
                      </a>
                      <ul className="ltn__category-submenu">
                        <li className="ltn__category-submenu-title ltn__category-menu-drop">
                          <a href="#">Handbags</a>
                          <ul className="ltn__category-submenu-children">
                            <li>
                              <a href="#">Clutches</a>
                            </li>
                            <li>
                              <a href="#">Cross Body</a>
                            </li>
                            <li>
                              <a href="#">Satchels</a>
                            </li>
                            <li>
                              <a href="#">Sholuder</a>
                            </li>
                            <li>
                              <a href="#">Toter</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    {/* <!-- Submenu --> */}
                    <li className="ltn__category-menu-item ltn__category-menu-drop">
                      <a href="shop.html">
                        <i className="icon-options"></i>Food & Nutrition
                      </a>
                      <ul className="ltn__category-submenu">
                        <li className="ltn__category-submenu-title ltn__category-menu-drop">
                          <a href="#">Handbags</a>
                          <ul className="ltn__category-submenu-children">
                            <li>
                              <a href="#">Clutches</a>
                            </li>
                            <li>
                              <a href="#">Cross Body</a>
                            </li>
                            <li>
                              <a href="#">Satchels</a>
                            </li>
                            <li>
                              <a href="#">Sholuder</a>
                            </li>
                            <li>
                              <a href="#">Toter</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    {/* <!-- Show more menu --> */}
                    <li className="ltn__category-menu-more-item-child">
                      <a href="shop.html">
                        <i className="icon-shopping-bags"></i>Apple Juice
                      </a>
                      <ul className="ltn__category-submenu">
                        <li className="ltn__category-submenu-title ltn__category-menu-drop">
                          <a href="#">Handbags</a>
                          <ul className="ltn__category-submenu-children">
                            <li>
                              <a href="#">Clutches</a>
                            </li>
                            <li>
                              <a href="#">Cross Body</a>
                            </li>
                            <li>
                              <a href="#">Satchels</a>
                            </li>
                            <li>
                              <a href="#">Sholuder</a>
                            </li>
                            <li>
                              <a href="#">Toter</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="ltn__category-menu-more-item-child">
                      <a href="shop.html">
                        <i className="icon-options"></i>Dry Nuts
                      </a>
                      <ul className="ltn__category-submenu">
                        <li className="ltn__category-submenu-title ltn__category-menu-drop">
                          <a href="#">Handbags</a>
                          <ul className="ltn__category-submenu-children">
                            <li>
                              <a href="#">Clutches</a>
                            </li>
                            <li>
                              <a href="#">Cross Body</a>
                            </li>
                            <li>
                              <a href="#">Satchels</a>
                            </li>
                            <li>
                              <a href="#">Sholuder</a>
                            </li>
                            <li>
                              <a href="#">Toter</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="ltn__category-menu-more-item-parent">
                      <a className="rx-default">
                        More categories{" "}
                        <span className="cat-thumb  icon-plus"></span>
                      </a>
                      <a className="rx-show">
                        close menu{" "}
                        <span className="cat-thumb  icon-remove"></span>
                      </a>
                    </li>
                    {/* Single menu end */}
                  </ul>
                </div>
              </div>
              {/* <!-- END CATEGORY-MENU-LIST --> */}
            </div>
            <div className="col-lg-9">
              <div className="ltn__slide-active-2 slick-slide-arrow-1 slick-slide-dots-1">
                {/* <!-- ltn__slide-item --> */}
                <div
                  className="ltn__slide-item ltn__slide-item-10 section-bg-1 bg-image"
                  data-bs-bg="img/slider/61.jpg"
                >
                  <div className="ltn__slide-item-inner">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-7 align-self-center">
                          <div className="slide-item-info">
                            <div className="slide-item-info-inner ltn__slide-animation">
                              <h5 className="slide-sub-title ltn__secondary-color animated text-uppercase">
                                Up To 50% Off Today Only!
                              </h5>
                              <h1 className="slide-title  animated">
                                Gold Standard <br />
                                Pre-Workout
                              </h1>
                              <h5 className="color-orange  animated">
                                Starting at &16.99
                              </h5>
                              <div className="slide-brief animated d-none">
                                <p>
                                  Predictive analytics is drastically changing
                                  the real estate industry. In the past,
                                  providing data for quick
                                </p>
                              </div>
                              <div className="btn-wrapper  animated">
                                <a
                                  href="shop.html"
                                  className="theme-btn-1 btn btn-effect-1 text-uppercase"
                                >
                                  Shop now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-5 align-self-center">
                          <div className="slide-item-img">
                            <a href="shop.html">
                              <img src="img/product/1.png" alt="Image" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- ltn__slide-item --> */}
                <div
                  className="ltn__slide-item ltn__slide-item-10 section-bg-1 bg-image"
                  data-bs-bg="img/slider/62.jpg"
                >
                  <div className="ltn__slide-item-inner">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-7 align-self-center">
                          <div className="slide-item-info">
                            <div className="slide-item-info-inner ltn__slide-animation">
                              <h4 className="slide-sub-title ltn__secondary-color animated text-uppercase">
                                Welcome to our shop
                              </h4>
                              <h1 className="slide-title  animated">
                                Gold Standard <br />
                                Pre-Workout{" "}
                              </h1>
                              <div className="slide-brief animated d-none">
                                <p>
                                  Predictive analytics is drastically changing
                                  the real estate industry. In the past,
                                  providing data for quick
                                </p>
                              </div>
                              <div className="btn-wrapper  animated">
                                <a
                                  href="shop.html"
                                  className="theme-btn-1 btn btn-effect-1 text-uppercase"
                                >
                                  Shop now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-5 align-self-center">
                          <div className="slide-item-img">
                            <a href="shop.html">
                              <img src="img/slider/62.jpg" alt="Image" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- SLIDER AREA END --> */}
    </>
  );
}
