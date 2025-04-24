import React from 'react';

import HeroPricing from './HeroPricing';
import OpenAccount from './OpenAccount';
import Brokerage from './Brokerage';

function PricingPage() {
    return (
        <>
         <HeroPricing/>
         <OpenAccount />
         <Brokerage/>
        </>
      );
}

export default PricingPage;