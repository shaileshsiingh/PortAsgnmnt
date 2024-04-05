import React from "react";
import { useState, useEffect } from "react";

export default function Lefthome() {
  const [userdata, setuserdata] = useState([]);
  const fetchdata = async () => {
    const data = await fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    );
    const res = await data.json();
    setuserdata(res.user.about);
  };

  console.log(userdata);
  useEffect(() => {
    fetchdata();
  }, []);
  const { name, title, description, quote } = userdata;
  return (
    <div className="left-side-home john-head" id="home">
      <div className="header">
        <div className="logo"></div>
      </div>

      <div className="center-container-home">
        <div className="center-block-home">
          <div className="container-home">
            <div className="introduction">
              <h3
                style={{
                  fontSize: "20px",
                  color: "olive",
                  opacity: "0.5",
                  paddingBottom: "10px",
                  marginTop: "20px",
                }}
              >
                {title}
              </h3>
              <h1 className="home-page-title">{name}</h1>
              <h3
                style={{
                  fontSize: "20px",
                  color: "olive",
                  opacity: "0.5",
                  paddingBottom: "10px",
                  marginTop: "20px",
                }}
              >
                {quote}
              </h3>

              <div className="divider-m-2"></div>

              <p>{description}</p>
              <div className="divider-m-2"></div>

              <div className="the-button-wrapper the-button-wrapper-home">
                <a className="page-scroll" href="#contact">
                  <div className="the-button">CONTACT</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
