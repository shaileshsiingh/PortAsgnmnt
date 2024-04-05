import React from "react";
import { useState, useEffect } from "react";

export default function Contact() {
  const [userdata, setuserdata] = useState([]);
  const [email, setemail] = useState([]);

  const fetchdata = async () => {
    const data = await fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    );
    const res = await data.json();
    setuserdata(res.user.about);
    setemail(res.user.email);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const { phoneNumber, address } = userdata;
  const { Email } = email;
 
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-subheading-wrapper-all">
              <h2 className="section-subheading">
                <span>Get in touch</span>
              </h2>
            </div>

            <div className="divider-s"></div>

            <h2 className="home-page-title-all">Contact</h2>
          </div>
        </div>

        <div className="divider-l"></div>

        <div className="row">
          <div className="col-md-6 col-all">
            <h6 className="contact">
              <span className="awesome">Street</span> address
            </h6>

            <div className="divider-m"></div>

            <div className="txt">
              <p>{address}</p>
            </div>

            <div className="divider-m visible-mobile-devices"></div>
          </div>

          <div className="col-md-6 col-all">
            <h6 className="contact">
              <span className="awesome">Contact</span> inquiry
            </h6>

            <div className="divider-m"></div>

            <div className="txt">
              <p>
                <a className="link-effect" href="mailto:contact@domainname.com">
                  portfolio3@gmail.com
                </a>
                <br />
                {phoneNumber}
              </p>
            </div>
          </div>
        </div>

        <div className="divider-l"></div>

        <div className="row">
          <div className="col-lg-12 col-all">
            <h6 className="contact">
              <span className="awesome">Inquiry</span> form
            </h6>

            <div className="divider-m"></div>
          </div>

          <div id="contact-form">
            <form action="contact.php" id="form" method="post" name="send">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <input
                  className="requiredField name"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                />
              </div>

              <div className="col-sm-12 col-md-6 col-lg-6">
                <input
                  className="requiredField email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="text"
                />
              </div>

              <div className="col-sm-12 col-md-12 col-lg-12">
                <input
                  className="requiredField subject"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  type="text"
                />
              </div>

              <div className="make-space">
                <textarea
                  className="requiredField message"
                  id="message"
                  name="message"
                  placeholder="Message"
                ></textarea>
              </div>

              <div>
                <div className="the-button-wrapper the-button-wrapper-form">
                  <button
                    className="the-button the-button-submit"
                    id="submit"
                    type="submit"
                  >
                    <span>Submit</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="divider-xl"></div>

        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="copyright">
              <a href="#">Runex</a> &copy; All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
