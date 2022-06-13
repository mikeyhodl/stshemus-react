import React from 'react';

export default function Home() {
  return (
    <div>
      <section className="section main-banner" id="top" data-section="section1">
        <video autoPlay muted loop id="bg-video">
          <source src="assets/images/course-video.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay header-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="caption">
                  <h2>Welcome St. Shemus Park Medical Centre</h2>
                  <p>St Shemus Park is an out-patient clinic in <a rel="nofollow" href="https://goo.gl/maps/bubuY2M4uFZqsknC9" target="_blank">Kitale</a>. providing quality accessible and affordable healthcare <a rel="nofollow" href="./services">services</a>.</p>
                  <div className="main-button-red">
                    <div><a href="./contact">Contact Us!</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="owl-service-item owl-carousel">
                <div className="item">
                  <div className="icon">
                    <img src="assets/images/service-icon-01.png" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Consultation</h4>
                  </div>
                </div>
                <div className="item">
                  <div className="icon">
                    <img src="assets/images/service-icon-02.png" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Fp services</h4>
                  </div>
                </div>
                <div className="item">
                  <div className="icon">
                    <img src="assets/images/service-icon-03.png" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Minor theatre</h4>
                  </div>
                </div>
                <div className="item">
                  <div className="icon">
                    <img src="assets/images/service-icon-02.png" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Maternal care</h4>
                  </div>
                </div>
                <div className="item">
                  <div className="icon">
                    <img src="assets/images/service-icon-03.png" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Circumcision</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="upcoming-meetings" id="meetings">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  <div className="meeting-single-item">
                    <div className="down-content">
                      <h4>About St. Shemus Park Medical Centre</h4>
                      <p>St Shemus Park is an out-patient clinic in Kitale providing quality accessible and affordable healthcare services.</p>
                      <br />
                      <ul>
                        <li><strong>Our Services include:</strong></li>
                        <br />
                        <li>• Consultation</li>
                        <li>• Lab services and equipped laboratory services</li>
                        <li>• Fp services</li>
                        <li>• Patient observation and treatment room</li>
                        <li>• Minor theatre</li>
                        <li>• Circumcision</li>
                        <li>• Maternal care</li>
                        <li>• Child wellness clinic</li>
                      </ul>
                      <br />
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="hours">
                            <h5>Working Hours</h5>
                            <p>Working 24/7 with patient observation rooms</p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="location">
                            <h5>Location</h5>
                            <p>Laini Moja Kitale Mother’s Pharmacy building</p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="book now">
                            <h5>Book Now</h5>
                            <p>+254 700 449 051</p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  <div className="meeting-single-item">
                    <div className="down-content">
                      <h4 style={{textAlign: 'center'}}>Vision</h4>
                      <p>To contribute to health and well being of all our clients by providing the best care through integrated medical practice.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  <div className="meeting-single-item">
                    <div className="down-content">
                      <h4 style={{textAlign: 'center'}}>Mission</h4>
                      <p>To be the best in service delivery and clinical practice.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  <div className="meeting-single-item">
                    <div className="down-content">
                      <h4 style={{textAlign: 'center'}}>Motto</h4>
                      <p>Exceptional care close to you.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      <section className="apply-now" id="apply">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="row">
                <div className="col-lg-12">
                  <div className="item">
                    <h3>Location</h3>
                    <p>Laini Moja Kitale Mother’s Pharmacy building.</p>
                    <div className="main-button-red">
                      <div><a href="./contact">Contact Us Now!</a></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="item">
                    <h3>Working Hours</h3>
                    <p>Working 24/7 with patient observation rooms</p>
                    <div className="main-button-yellow">
                      <div><a href="./contact">Contact Us Now!</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordions is-first-expanded">
                <article className="accordion">
                  <div className="accordion-head">
                    <span>About St. Shemus Park Medical Centre</span>
                    <span className="icon">
                      <i className="icon fa fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="content">
                      <p>St Shemus Park is an out-patient clinic in <a rel="nofollow" href="https://goo.gl/maps/bubuY2M4uFZqsknC9" target="_blank">Kitale</a>. providing quality accessible and affordable healthcare <a rel="nofollow" href="./services">services</a>.</p>
                    </div>
                  </div>
                </article>
                <article className="accordion">
                  <div className="accordion-head">
                    <span>Vision</span>
                    <span className="icon">
                      <i className="icon fa fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="content">
                      <p>To contribute to health and well being of all our clients by providing the best care through integrated medical practice.
                      </p>
                    </div>
                  </div>
                </article>
                <article className="accordion">
                  <div className="accordion-head">
                    <span>Mission</span>
                    <span className="icon">
                      <i className="icon fa fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="content">
                      <p>To be the best in service delivery and clinical practice.
                      </p>
                    </div>
                  </div>
                </article>
                <article className="accordion last-accordion">
                  <div className="accordion-head">
                    <span>Motto</span>
                    <span className="icon">
                      <i className="icon fa fa-chevron-right" />
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="content">
                      <p>Exceptional care close to you.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-us" id="contact">
        <div className="container">
        </div>
      </section>
    </div>
  );
}
