import React from "react";

function Treatment() {
  return (
    <section className="treatment wrap">
      <div className="treatment-img">
        <img src={require("../../assets/images/treatment.png")} alt="" />
      </div>
      <div className="treatment-content">
        <h1>Exceptional Dental Care, on Your Terms</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          ipsa, rem non vitae ducimus nulla tenetur esse iusto maiores, alias
          et. Explicabo culpa velit sit pariatur enim, qui minus aspernatur
          quis, a nesciunt itaque eligendi alias. Sed ipsam inventore veniam,
          repudiandae ad quas? Autem perferendis sed magnam impedit, quaerat
          eos?
        </p>

        <button className="btn bg-primary">GET STARTED</button>
      </div>
    </section>
  );
}

export default Treatment;