import React, { useEffect, useState } from "react";

import "./covid.css";

function Covid() {
  const [covidData, setCovidData] = useState({});
  const getCovidData = async () => {
    try {
      const response = await fetch(
        "https://data.covid19india.org/state_district_wise.json"
      );
      const data = await response.json();
      const distData = data.Chhattisgarh.districtData.Durg;
      setCovidData(distData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div>
      <ul className="cards">
        <li>
          <a href="/" className="card">
            <img
              src="https://news.harvard.edu/wp-content/uploads/2023/10/COVID-500x500.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <div className="card__header-text">
                  <h3 className="card__title">District Name :-Durg </h3>
                  <span className="card__status">
                    Data of Increment and Decrement
                  </span>
                </div>
              </div>
              <p className="card__description">
                Number of  Active Cases {covidData?.active}:- Number of Confirmed Cases:- {covidData?.confirmed}
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Covid;
