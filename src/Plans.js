import React from 'react';

function Button() {
    return <button tabindex='0' class='rounded-full bg-white hover:bg-red-400 border border-red-400 p-2 mt-3 w-1/2 text-red-400 hover:text-white text-center' onClick={() => alert('Give me your credit card information.')}>Buy</button>
}

const plans = [
    {
        name: 'Intro',
        price: 0,
        features: ['The essential snake oil package', 'You get nothing'],
        isUpgrade: false
    },
    {
        name: 'Starter',
        price: 1000,
        features: ['3 baskets of cabbages', '4 snake scales'],
        isUpgrade: true
    },
    
    {
        name: 'Basic',
        price: 2500,
        features: ['1 kilogram of garlic', '2 baskets of apples'],
        isUpgrade: true
    },
    
    {
        name: 'Pro',
        price: 4500,
        features: ['A bowl of soup', 'A berry delight'],
        isUpgrade: true
    }
];

export default function Plans() {
    const planList = plans.map(plan =>
        <div class='bg-blue-400 hover:bg-red-400 transform transition duration-180 hover:scale-110 max-w-64 mx-auto rounded-md shadow-lg basis-1/4 shrink items-center'>
            <div class='text-white text-center p-6'>
                <span>{plan.name}</span>
                <br></br>
                $<span class='text-3xl'>{plan.price/100}</span>.<span>{(plan.price%100).toString().padStart(2, '0')}</span>
                <br></br>
                <span class='text-sm'>/month</span>
            </div>
            <div class='text-center bg-white p-6 h-fit rounded-b-md'>
                <ul>
                    {(plan.isUpgrade ? plan.features.concat('+ previous benefits') : plan.features).map(feature =>
                        <li>{feature}</li>
                    )}
                </ul>
                <Button />
            </div>
        </div>
    );

    return (<div class='mx-auto max-w-5xl flex space-x-4'>{planList}</div>);
};