import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                amount={500}
                token={token => console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            />
        );
    }
}

export default Payments;

console.log('key', process.env.REACT_APP_STRIPE_KEY);
console.log('Enviroment', process.env.NODE_ENV);