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
                  {'{'}/* {/* <h6>Hello Students</h6> */} */{'}'}
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
      {'{'}/* {/* ***** Main Banner Area End ***** */} */{'}'}
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
                    {'{'}/* {/* <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p> */} */{'}'}
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
        {'{'}/* {/* <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="section-heading">
          <h2>Upcoming Meetings</h2>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="categories">
          <h4>Meeting Catgories</h4>
          <ul>
            <li><a href="#">Sed tempus enim leo</a></li>
            <li><a href="#">Aenean molestie quis</a></li>
            <li><a href="#">Cras et metus vestibulum</a></li>
            <li><a href="#">Nam et condimentum</a></li>
            <li><a href="#">Phasellus nec sapien</a></li>
          </ul>
          <div class="main-button-red">
            <a href="meetings.html">All Upcoming Meetings</a>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="row">
          <div class="col-lg-6">
            <div class="meeting-item">
              <div class="thumb">
                <div class="price">
                  <span>$22.00</span>
                </div>
                <a href="meeting-details.html"><img src="assets/images/meeting-01.jpg" alt="New Lecturer Meeting"></a>
              </div>
              <div class="down-content">
                <div class="date">
                  <h6>Nov <span>10</span></h6>
                </div>
                <a href="meeting-details.html"><h4>New Lecturers Meeting</h4></a>
                <p>Morbi in libero blandit lectus<br />cursus ullamcorper.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="meeting-item">
              <div class="thumb">
                <div class="price">
                  <span>$36.00</span>
                </div>
                <a href="meeting-details.html"><img src="assets/images/meeting-02.jpg" alt="Online Teaching"></a>
              </div>
              <div class="down-content">
                <div class="date">
                  <h6>Nov <span>24</span></h6>
                </div>
                <a href="meeting-details.html"><h4>Online Teaching Techniques</h4></a>
                <p>Morbi in libero blandit lectus<br />cursus ullamcorper.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="meeting-item">
              <div class="thumb">
                <div class="price">
                  <span>$14.00</span>
                </div>
                <a href="meeting-details.html"><img src="assets/images/meeting-03.jpg" alt="Higher Education"></a>
              </div>
              <div class="down-content">
                <div class="date">
                  <h6>Nov <span>26</span></h6>
                </div>
                <a href="meeting-details.html"><h4>Higher Education Conference</h4></a>
                <p>Morbi in libero blandit lectus<br />cursus ullamcorper.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="meeting-item">
              <div class="thumb">
                <div class="price">
                  <span>$48.00</span>
                </div>
                <a href="meeting-details.html"><img src="assets/images/meeting-04.jpg" alt="Student Training"></a>
              </div>
              <div class="down-content">
                <div class="date">
                  <h6>Nov <span>30</span></h6>
                </div>
                <a href="meeting-details.html"><h4>Student Training Meetup</h4></a>
                <p>Morbi in libero blandit lectus<br />cursus ullamcorper.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */} */{'}'}
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
      {'{'}/* {/* <section class="our-courses" id="courses">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="section-heading">
          <h2>Our Popular Courses</h2>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="owl-courses-item owl-carousel">
          <div class="item">
            <img src="assets/images/course-01.jpg" alt="Course One">
            <div class="down-content">
              <h4>Morbi tincidunt elit vitae justo rhoncus</h4>
              <div class="info">
                <div class="row">
                  <div class="col-8">
                    <ul>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                    </ul>
                  </div>
                  <div class="col-4">
                     <span>$160</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <img src="assets/images/course-02.jpg" alt="Course Two">
            <div class="down-content">
              <h4>Curabitur molestie dignissim purus vel</h4>
              <div class="info">
                <div class="row">
                  <div class="col-8">
                    <ul>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                    </ul>
                  </div>
                  <div class="col-4">
                     <span>$180</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <img src="assets/images/course-03.jpg" alt="">
            <div class="down-content">
              <h4>Nulla at ipsum a mauris egestas tempor</h4>
              <div class="info">
                <div class="row">
                  <div class="col-8">
                    <ul>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                    </ul>
                  </div>
                  <div class="col-4">
                     <span>$140</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <img src="assets/images/course-04.jpg" alt="">
            <div class="down-content">
              <h4>Aenean molestie quis libero gravida</h4>
              <div class="info">
                <div class="row">
                  <div class="col-8">
                    <ul>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                    </ul>
                  </div>
                  <div class="col-4">
                     <span>$120</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <img src="assets/images/course-01.jpg" alt="">
            <div class="down-content">
              <h4>Lorem ipsum dolor sit amet adipiscing elit</h4>
              <div class="info">
                <div class="row">
                  <div class="col-8">
                    <ul>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                    </ul>
                  </div>
                  <div class="col-4">
                     <span>$250</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <img src="assets/images/course-02.jpg" alt="">
            <div class="down-content">
              <h4>TemplateMo is the best website for Free CSS</h4>
              <div class="info">
                <div class="row">
                  <div class="col-8">
                    <ul>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                    </ul>
                  </div>
                  <div class="col-4">
                     <span>$270</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <img src="assets/images/course-03.jpg" alt="">
            <div class="down-content">
              <h4>Web Design Templates at your finger tips</h4>
              <div class="info">
                <div class="row">
                  <div class="col-8">
                    <ul>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                    </ul>
                  </div>
                  <div class="col-4">
                     <span>$340</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <img src="assets/images/course-04.jpg" alt="">
            <div class="down-content">
              <h4>Please visit our website again</h4>
              <div class="info">
                <div class="row">
                  <div class="col-8">
                    <ul>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                    </ul>
                  </div>
                  <div class="col-4">
                     <span>$360</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <img src="assets/images/course-01.jpg" alt="">
            <div class="down-content">
              <h4>Responsive HTML Templates for you</h4>
              <div class="info">
                <div class="row">
                  <div class="col-8">
                    <ul>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                    </ul>
                  </div>
                  <div class="col-4">
                     <span>$400</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <img src="assets/images/course-02.jpg" alt="">
            <div class="down-content">
              <h4>Download Free CSS Layouts for your business</h4>
              <div class="info">
                <div class="row">
                  <div class="col-8">
                    <ul>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                    </ul>
                  </div>
                  <div class="col-4">
                     <span>$430</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <img src="assets/images/course-03.jpg" alt="">
            <div class="down-content">
              <h4>Morbi in libero blandit lectus cursus</h4>
              <div class="info">
                <div class="row">
                  <div class="col-8">
                    <ul>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                    </ul>
                  </div>
                  <div class="col-4">
                     <span>$480</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <img src="assets/images/course-04.jpg" alt="">
            <div class="down-content">
              <h4>Curabitur molestie dignissim purus</h4>
              <div class="info">
                <div class="row">
                  <div class="col-8">
                    <ul>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                    </ul>
                  </div>
                  <div class="col-4">
                     <span>$560</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */} */{'}'}
      {'{'}/* {/* <section class="our-facts">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <div class="row">
          <div class="col-lg-12">
            <h2>A Few Facts About Our University</h2>
          </div>
          <div class="col-lg-6">
            <div class="row">
              <div class="col-12">
                <div class="count-area-content percentage">
                  <div class="count-digit">94</div>
                  <div class="count-title">Succesed Students</div>
                </div>
              </div>
              <div class="col-12">
                <div class="count-area-content">
                  <div class="count-digit">126</div>
                  <div class="count-title">Current Teachers</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="row">
              <div class="col-12">
                <div class="count-area-content new-students">
                  <div class="count-digit">2345</div>
                  <div class="count-title">New Students</div>
                </div>
              </div> 
              <div class="col-12">
                <div class="count-area-content">
                  <div class="count-digit">32</div>
                  <div class="count-title">Awards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div class="col-lg-6 align-self-center">
        <div class="video">
          <a href="https://www.youtube.com/watch?v=HndV87XpkWg" target="_blank"><img src="assets/images/play-icon.png" alt=""></a>
        </div>
      </div>
    </div>
  </div>
</section> */} */{'}'}
      <section className="contact-us" id="contact">
        <div className="container">
          {'{'}/* {/* <div class="row">
      <div class="col-lg-9 align-self-center">
        <div class="row">
          <div class="col-lg-12">
            <form id="contact" action="" method="post">
              <div class="row">
                <div class="col-lg-12">
                  <h2>Let's get in touch</h2>
                </div>
                <div class="col-lg-4">
                  <fieldset>
                    <input name="name" type="text" id="name" placeholder="YOURNAME...*" required="">
                  </fieldset>
                </div>
                <div class="col-lg-4">
                  <fieldset>
                  <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="YOUR EMAIL..." required="">
                </fieldset>
                </div>
                <div class="col-lg-4">
                  <fieldset>
                    <input name="subject" type="text" id="subject" placeholder="SUBJECT...*" required="">
                  </fieldset>
                </div>
                <div class="col-lg-12">
                  <fieldset>
                    <textarea name="message" type="text" class="form-control" id="message" placeholder="YOUR MESSAGE..." required=""></textarea>
                  </fieldset>
                </div>
                <div class="col-lg-12">
                  <fieldset>
                    <button type="submit" id="form-submit" class="button">SEND MESSAGE NOW</button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="right-info">
          <ul>
            <li>
              <h6>Phone Number</h6>
              <span>010-020-0340</span>
            </li>
            <li>
              <h6>Email Address</h6>
              <span>info@meeting.edu</span>
            </li>
            <li>
              <h6>Street Address</h6>
              <span>Rio de Janeiro - RJ, 22795-008, Brazil</span>
            </li>
            <li>
              <h6>Website URL</h6>
              <span>www.meeting.edu</span>
            </li>
          </ul>
        </div>
      </div>
    </div> */} */{'}'}
        </div>
      </section>
    </div>
  );
}
