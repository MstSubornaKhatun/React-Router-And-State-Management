import React, { use } from 'react';

const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);

    console.log(pricingData)


    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default PricingOptions;