"use client";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="terms-conditions-container p-8">
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
      <div className="terms-conditions-content">
        <h2 className="text-xl mb-2">Introduction</h2>
        <p>Welcome to Homenetics ("we," "us," or "our")...</p>
        <h3 className="text-lg mt-4 mb-2">1. Use of Services</h3>
        <p>1.1 Eligibility: ...</p>
        <p>1.2 Account Registration: ...</p>
        <p>1.3 Account Security: ...</p>
        <h3 className="text-lg mt-4 mb-2">2. Privacy</h3>
        <p>2.1 Data Collection: ...</p>
        <p>2.2 Data Security: ...</p>
        <p>2.3 Third-Party Services: ...</p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default TermsAndConditions;
