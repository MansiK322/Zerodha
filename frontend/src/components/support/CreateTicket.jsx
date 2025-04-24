import React from 'react';

function CreateTicket() {
    return (
      <div className='container'>
      <div className='row p-5 mt-5 mb-5'>
        <h1 className='fs-2'>To create a ticket, select a relevant topic</h1>
        <div className='col-4 p-5 mt-2 mb-2'>
        <h4 className=''><i className="fa fa-user" aria-hidden="true"></i> Your Zerodha Account</h4>
        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Your Profile</a><br/>
        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Account Modification</a><br/>
        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Client Master Report (CMR) and Depository Participant (DP)</a><br/>
        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Nomination</a><br/>
        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Transfer & conversion of securities</a>
      </div>
      <div className='col-4 p-5 mt-2 mb-2'>
        <h4 className=''><i className="fa fa-bar-chart" aria-hidden="true"></i> Kite</h4>
        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>IPO</a><br/>
        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Trading FAQs</a><br/>
        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Margin Trading Facility (MTF) and Margins</a><br/>
        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Charts and orders</a><br/>
        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Alerts and Nudges</a><br/>
        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>General</a><br/>
      </div>
      <div className='col-4 p-5 mt-2 mb-2'>
        <h4 className=''><i className="fa fa-check-circle-o" aria-hidden="true"></i> Console</h4>
        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Portfolio</a><br/>
        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Corporate actions</a><br/>
        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Funds statement</a><br/>
        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Reports</a><br/>
        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Profile</a><br/>
        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Segments</a><br/>
      </div>
      <div className='col-4 p-5 mt-2 mb-2'>
        <h4 className=''><i className="fa fa-dot-circle-o" aria-hidden="true"></i> Coin</h4>
        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Understanding mutual funds and Coin</a><br/>
        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Coin app</a><br/>
        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Coin Web</a><br/>
        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Transactions and reports</a><br/>
        <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>National Pension Scheme (NPS)</a><br/>
      </div>
      </div>
    </div>
      );
}

export default CreateTicket;