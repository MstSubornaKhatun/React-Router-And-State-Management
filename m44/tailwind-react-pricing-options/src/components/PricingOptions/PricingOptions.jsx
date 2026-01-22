import React, { use } from 'react';
import PricingCard from '../pricingCard/pricingCard';

const PricingOptions = ({pricingPromise}) => {
    const PricingData = use(pricingPromise);
    // console.log(PricingData)
    return (
        <div>
            <h1 className='text-5xl'>Get Our Membership</h1>
            <div>
                {
                    PricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;