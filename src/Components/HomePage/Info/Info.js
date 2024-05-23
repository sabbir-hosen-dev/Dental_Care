import React, { useEffect, useState } from "react";
import "./info.css";

function Info() {
  const [infodata, setInfoData] = useState(null);
  const [isLoadding, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5003/getInfoData")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setInfoData(data);
        setError(null);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  return (
    <section className="info-wrap">
            <div className="row">
        {isLoadding && <h3>Data is Loadding...</h3>}
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        {infodata &&
          infodata.map((info) => {
            const { id, img, title, descprion } = info;
            return (
              <div className="info" key={id}>
                <div className="info-icon">
                  {/* <img src={img} alt="" /> */}
                </div>
                <div className="info-desc">
                  <h5>{title}</h5>
                  <p>{descprion}</p>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default Info;
