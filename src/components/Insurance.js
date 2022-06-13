import React from "react";

export default function App() {
  return (
    <div>
      <section className="heading-page header-text" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h6>Get all details</h6>
              <h2>Insurance companies that we accept</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="meetings-page" id="meetings">
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
                        <li>• Lab services and equipped laboratory</li>
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
        {/* <div className="footer">
          <p>Copyright © 2022 St. Shemus Park Medical Centre. 
            <br />
            Designed by: <a href="https://lancolatech.co.ke" target="_blank">Lancolatech Company Limited</a>
          </p>
        </div> */}
      </section>
    </div>
  );
}
