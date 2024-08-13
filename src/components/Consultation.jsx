import React from "react";
import img from "../assets/consultationImg.svg";
import Button from "../layout/Button";

const Consultation = () => {
  return (
    <div>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <div>
          <h1>Realize your dream project with Archmove</h1>
          <Button title="FREE CONSULTATION" />
        </div>
      </div>
    </div>
  );
};

export default Consultation;
