import React from 'react';
import PaymentOption from '../paymentOption/PaymentOption';

function Payment() {
  return (
    <div className="para bg-blue-500 text-white py-60">
      <h3 className="md:text-center text-4xl font-medium md:text-5xl">
        Everything you need to run your books.
      </h3>
      <p className="py-10 md:text-center text-lg font-medium">
        Well everything you need if you aren’t that picky about minor details
        like tax compliance.
      </p>
      <div>
        <PaymentOption />
      </div>
    </div>
  );
}

export default Payment;
