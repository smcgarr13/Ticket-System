import React from 'react';
import { useQuery } from '@apollo/client';
import CHECKOUT_QUERY from '../utilsClient/queries/stripeQueries';

const CheckoutComponent = ({ questionId }) => {
  const { loading, error, data } = useQuery(CHECKOUT_QUERY, {
    variables: { questionId },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error occurred: {error.message}</p>;
  }

  if (data) {
    const { session } = data.checkout;
    // Use the returned session ID to initiate the Stripe checkout on the client-side
    // For example, you can redirect the user to the Stripe checkout page
    window.location.href = `https://stripe.com/checkout?sessionId=${session}`;
    return null; // Render nothing as we are redirecting
  }

  return null; // Render nothing by default
};

export default CheckoutComponent;
