import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51HGnQMBc6VYFr8QnJDoEhcxnAQCB6EGIWctAOK94d7UXPBUYdwZLPxD6sguzk7u1Q6ES1eT1xZEXAx8Dx6tYBq1R00X4sn8oSy";

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd." // the pop-in header title
            shippingAddress
            billingAddress
            image="https://sendeyo.com/up/d/f3eb2117da" // the pop-in header image (default none)
            description={`Your total is $${price}`}
            ComponentClass="div"
            panelLabel="Pay Now" // prepended to the amount in the bottom pay button
            amount={priceForStripe} // cents
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
 
export default StripeCheckoutButton;