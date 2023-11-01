import IvTherapyIcon from '../../images/iv_therapy_icon.png'
import WasteManagementIcon from '../../images/waste_management_icon.png'
import LungIcon from '../../images/lungs_icon.png'
import BeddingIcon from '../../images/bedding_icon.png'
import OncologyIcon from '../../images/oncology_icon.png'
import WoundIcon from '../../images/wound_icon.png'
import InfectionIcon from '../../images/infection_icon.png'
import AdImage1 from '../../images/Ad_1.png'
import AdImage2 from '../../images/Ad_2.png'

const HeroSlider = () => {
  const linkContainerStyle = {
    display: "flex",
    alignItems: "center",
    textDecoration: "none" // Remove default underline for links
  };

  const imageStyle = {
    marginRight: "10px",// Adjust the spacing between the image and text
    width: "30px"
  };

  const containerStyle = {
    width: '510px',
    // height: '495px',
    overflow: 'hidden',
 };

 const imageSliderStyle = {
    // minWidth: '100%',
    // minHeight: '100%',
    width: 'auto',
    height: 'auto',
 };

  return (
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
                    <a href="shop.html" style={linkContainerStyle}>
                      <img src={IvTherapyIcon} alt="IV Therapy" style={imageStyle}/>IV Therapy{" "}
                    </a>
                    <ul className="ltn__category-submenu ltn__category-column-5">
                      <li className="ltn__category-submenu-title ltn__category-menu-drop">
                        <a href="#">Health Care</a>
                        <ul className="ltn__category-submenu-children">
                          <li>
                            <a href="#">Clutches Clutches Clutches Clutches </a>
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
                    <a href="shop.html" style={linkContainerStyle}>
                    <img src={WasteManagementIcon} alt="IV Therapy" style={imageStyle}/>Waste Management
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
                    <a href="shop.html" style={linkContainerStyle}>
                    <img src={LungIcon} alt="Respiratory" style={imageStyle}/>Respiratory
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
                    <a href="shop.html" style={linkContainerStyle}>
                    <img src={BeddingIcon} alt="Bedding" style={imageStyle}/>Bedding
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
                    <a href="shop.html" style={linkContainerStyle}>
                    <img src={OncologyIcon} alt="Respiratory" style={imageStyle}/>Oncology
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
                    <a href="shop.html" style={linkContainerStyle}>
                    <img src={WoundIcon} alt="Wound Care" style={imageStyle}/>Wound care
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
                    <a href="shop.html" style={linkContainerStyle}>
                    <img src={InfectionIcon} alt="Infection Prevention" style={imageStyle}/>Infection Prevention and control
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
                data-bs-bg={AdImage1}
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
                            Dependable and <br />
                            High-Quality Medical Products
                            </h1>
                            <h5 className="color-orange  animated">
                              Starting at &16.99
                            </h5>
                            <div className="slide-brief animated d-none">
                              <p>
                                Predictive analytics is drastically changing the
                                real estate industry. In the past, providing
                                data for quick
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
                      {/* <div className="col-lg-5 col-md-5 col-sm-5 align-self-center">
                        <div className="slide-item-img">
                          <a href="shop.html">
                            <img src="img/product/1.png" alt="Image" />
                          </a>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ltn__slide-item --> */}
              <div
                className="ltn__slide-item ltn__slide-item-10 section-bg-1 bg-image"
                data-bs-bg={AdImage2}
              >
                <div className="ltn__slide-item-inner">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-7 col-md-7 col-sm-7 align-self-center">
                        <div className="slide-item-info">
                          {/* <div className="slide-item-info-inner ltn__slide-animation">
                            <h4 className="slide-sub-title ltn__secondary-color animated text-uppercase">
                              Welcome to our shop
                            </h4>
                            <h1 className="slide-title  animated">
                              Gold Standard <br />
                              Pre-Workout{" "}
                            </h1>
                            <div className="slide-brief animated d-none">
                              <p>
                                Predictive analytics is drastically changing the
                                real estate industry. In the past, providing
                                data for quick
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
                          </div> */}
                        </div>
                      </div>
                      {/* <div className="col-lg-5 col-md-5 col-sm-5 align-self-center">
                        <div className="slide-item-img">
                          <a href="shop.html">
                            <img src="img/slider/62.jpg" alt="Image" />
                          </a>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="ltn__slide-item ltn__slide-item-10 section-bg-1 bg-image" style={containerStyle}>
                <img src={AdImage2} style={imageSliderStyle} alt="slider"/>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
