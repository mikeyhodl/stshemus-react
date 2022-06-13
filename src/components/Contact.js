import React from 'react';

export default function App() {
  return (
    <div>
      <section className="heading-page header-text" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <h6>Here are our upcoming meetings</h6> */}
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-us" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 align-self-center">
              <div className="row">
                <div className="col-lg-12">
                  <form id="contact" action="https://formspree.io/f/mvolajqr" method="post">
                    <div className="row">
                      <div className="col-lg-12">
                        <h2>Let's get in touch</h2>
                      </div>
                      <div className="col-lg-4">
                        <fieldset>
                          <input name="name" type="text" id="name" placeholder="YOURNAME...*" required />
                        </fieldset>
                      </div>
                      <div className="col-lg-4">
                        <fieldset>
                          <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="YOUR EMAIL...*" required />
                        </fieldset>
                      </div>
                      <div className="col-lg-4">
                        <fieldset>
                          <input name="subject" type="text" id="subject" placeholder="SUBJECT...*" required />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea name="message" type="text" className="form-control" id="message" placeholder="YOUR MESSAGE...*" required defaultValue={""} />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button type="submit" id="form-submit" className="button">SEND MESSAGE NOW</button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="right-info">
                <ul>
                  <li>
                    <span>Phone Number</span>
                    <h6>+254 700 449 051</h6>
                  </li>
                  <li>
                    <span>Email Address</span>
                    <h6>info@stshemuspark.co.ke</h6>
                  </li>
                  <li>
                    <span>Address</span>
                    <h6>Laini Moja Kitale Mother’s Pharmacy building</h6>
                  </li>
                  <li>
                    <span>Website URL</span>
                    <h6>www.stshemuspark.co.ke</h6>
                  </li>
                </ul>
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