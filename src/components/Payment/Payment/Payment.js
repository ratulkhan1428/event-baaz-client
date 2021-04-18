import { Elements, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51IeOZQEhqVseDL2aotA7erwjF9mLTs9tCduyKoVjBCjMBf0TJJPymOmAwhsYD13gfhDJCNSUwZSA4lNaBWcVtOyy00kPzco2GL");

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
    </Elements>
  );
};

export default Payment;
