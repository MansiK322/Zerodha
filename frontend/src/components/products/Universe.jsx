import React from 'react';

// Import images from assets folder
import smallcaseLogo from '../../assets/smallcaseLogo.png';
import streakLogo from '../../assets/streakLogo.png';
import sensibullLogo from '../../assets/sensibullLogo.svg';
import zerodhaFundhouseLogo from '../../assets/zerodhaFundhouse.png';
import goldenpiLogo from '../../assets/goldenpiLogo.png';
import dittoLogo from '../../assets/dittoLogo.png';

function Universe() {
    return (
      <div className='container mt-5'>
        <div className='row text-center'>
          <h1>The Zerodha Universe</h1>
          <p>Extend your trading and investment experience even further with our partner platforms</p>
          
          <div className='col-4 p-3 mt-5'>
            <img src={smallcaseLogo} />
            <p className="text-small text-muted">Thematic investment platform</p>
          </div>
          
          <div className='col-4 p-3 mt-5'>
            <img src={streakLogo} style={{height:"50px", width:"90px"}}/>
            <p className="text-small text-muted">Algo & strategy platform</p>
          </div>
          
          <div className='col-4 p-3 mt-5'>
            <img src={sensibullLogo} style={{height:"45px", width:"80px"}} />
            <p className="text-small text-muted">Options trading platform</p>
          </div>
          
          <div className='col-4 p-3 mt-5'>
            <img src={zerodhaFundhouseLogo} style={{height:"60px", width:"100px"}}/>
            <p className="text-small text-muted">Asset management</p>
          </div>
          
          <div className='col-4 p-3 mt-5'>
            <img src={goldenpiLogo} style={{height:"60px", width:"80px"}}/>
            <p className="text-small text-muted">Bonds trading platform</p>
          </div>
          
          <div className='col-4 p-3 mt-5'>
            <img src={dittoLogo} style={{height:"55px", width:"80px"}} />
            <p className="text-small text-muted">Insurance</p>
          </div>
          
          <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto"}}>Signup Now</button>
        </div>
      </div>
    );
}

export default Universe;
