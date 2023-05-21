import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// load stripe outside of components render to avoid recreating stripe object on every render
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Checkout = () => {
  return (
    <div>
      {/* <h1>Checkout Page</h1> */}
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default Checkout;



// import React from 'react';
// import CheckoutForm from './CheckoutForm';

// const Checkout = () => {
//   return (
//     <div>
//       <h1>Checkout Page</h1>
//       <CheckoutForm />
//     </div>
//   );
// }

// export default Checkout;