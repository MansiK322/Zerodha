import React from 'react';

function Brokerage() {
    return (
        <div className="container">
          <div className="row p-5 mt-5 text-center border-top">
            <div className="col-8 p-4">
              <a href="" style={{textDecoration:"none"}}><h3 className="fs-5">Brokerage calculator</h3></a>
              <ul className="text-muted"style={{textAlign:"left", lineHeight:"2.5", fontSize:"12px"}}>
                <li>Call &  Trade and RMS auto squareoff: Additional charges of ₹50 + GST per order.</li>
                <li>Digital contract note will be sent via e-mail.</li>
                <li>Physical copies of contract notes,if required, shall be charged ₹20 per contract note. Courier charges applies.</li>
                <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
              </ul>
            </div>
            <div className="col-4 p-4">
              <a href="" style={{textDecoration:"none"}}><h3 className="fs-5">List of charges</h3></a>
            </div>

          </div>
        </div>
      );
}

export default Brokerage;