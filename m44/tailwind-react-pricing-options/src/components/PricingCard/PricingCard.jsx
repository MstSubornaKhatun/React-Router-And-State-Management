import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {name, price, description, features} = pricing;

    console.log(pricing)
    return (
        <div className='border bg-amber-600 rounded-2xl'>
            {/* card header */}
            <div className='grid md:grid-cols-3 '>
                <h1 className='text-7xl'>{name}</h1>
                <h1 className='text-3xl'>{price}</h1>
            </div>
            {/* card body */}
            <div className='bg-amber-400 p-4 rounded-2xl mt-10'>
                <p>{description}</p>
                {
                    features.map((feature, index)=> <PricingFeature key={index} feature={feature} ></PricingFeature>)
                }
            </div>
            <button className='btn w-full'>Subscribe</button>



            
        </div>
    );
};

export default PricingCard;