import {
    PayPalScriptProvider,
    BraintreePayPalButtons,
} from "@paypal/react-paypal-js";
const Paypal = () => {


    return (
        <PayPalScriptProvider
            options={{
                "client-id": "AWM0R9hZc7cSzjgjJ-qxXesY_Nd4FupJxxKRCG6J9F6CZPA_q4ErJtdcfuJ9slB4wYn6yfB16DowL4bf",
                "data-client-token": "EOlSc3Of4GmGBPFeUKXbVFHj8dNUrgte5Qzjxq0CKhlgNHpci1kbw4lT1GWc9SO1EzSW0shmUnyGuMRe",
            }}
        >
            <BraintreePayPalButtons
                createOrder={(data, actions) => {
                    return actions.braintree.createPayment({
                        flow: "checkout",
                        amount: "10.0",
                        currency: "USD",
                        intent: "capture",
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.braintree
                        .tokenizePayment(data)
                        .then((payload) => {
                            // call server-side endpoint to finish the sale
                        });
                }}
            />
        </PayPalScriptProvider>
    );
}

export default Paypal