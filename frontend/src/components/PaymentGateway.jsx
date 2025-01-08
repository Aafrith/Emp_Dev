import React from "react";

function PaymentGateway() {
  return (
    <div className="text-center py-16">
      <h2 className="text-4xl font-bold mb-6 mt-16">Payment Gateway</h2>
      <p className="text-lg mb-6">Please complete your payment to proceed with your selected plan.</p>
      {/* Mock Payment Form */}
      <form className="mx-auto max-w-lg">
        <input type="text" placeholder="Card Number" className="p-3 mb-4 border rounded w-full" />
        <input type="text" placeholder="Expiration Date" className="p-3 mb-4 border rounded w-full" />
        <input type="text" placeholder="CVV" className="p-3 mb-4 border rounded w-full" />
        <button type="submit" className="py-3 px-8 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700">
          Submit Payment
        </button>
      </form>
    </div>
  );
}

export default PaymentGateway;
