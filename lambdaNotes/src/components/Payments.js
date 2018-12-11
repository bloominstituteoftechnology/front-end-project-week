import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import {
    Credits,
  } from "../Styles";

class Payments extends Component {
  render() {
    return (
        <StripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
        <Credits>Buy Credits</Credits>
    </StripeCheckout>
    );
  }
}

export default Payments;

console.log("key", process.env.REACT_APP_STRIPE_KEY);
console.log("Enviroment", process.env.NODE_ENV);
