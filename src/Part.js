import React from "react";
import "./Part.css";
const Part = (props) => {
  return (
    <div>
      <div className="ad">
        <div className="flex-item">
          <h3>No of Investors</h3>
          <p>28,873</p>
        </div>
        <div className="flex-item">
          <h3>SIP Amount in Jun'22</h3>
          <p>1.22cr</p>
        </div>

        <div className="flex-item">
          <h3>SIP Clients</h3>
          <p>4,035</p>
        </div>
        <div className="flex-item">
          <h3>SIP Count in Jun'22</h3>
          <p>4,035</p>
        </div>
      </div>
    </div>
  );
};
export default Part;
