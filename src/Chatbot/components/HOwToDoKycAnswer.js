import React from 'react';

const HOwToDoKycAnswer = () => {
  return (
  <div style={{padding:"0px", fontSize:"14px", marginLeft: "-10px"}}>
      <ul style={{listStyleType: "upper-roman"}}>
          <li><b>In-Person Verification (IPV):</b> by producing the originals to the authorized person of the RTA, who will retain copy(ies) of the document(s).</li>
          <li><b>In hard copy:</b> by furnishing self-attested photocopy(ies) of the relevant document, with date.</li>
          <li><b>With e-sign:</b>
              <ul style={{listStyleType: "lower-alpha", marginLeft: "-7px"}}>
                  <li>
                  In case your email is already registered with us, you may send the scanned copies of your KYC documents with e-sign at our dedicated email-id: kyc@linkintime.co.in Kindly mention the email subject line as KYC Updation - (Company Name) - Folio No:________________ 
                  </li>
                  <li>
                      <p>Investors can also upload KYC documents with e-sign on our website https://www.linkintime.co.in - Investor Services - KYC Compliance.</p>
                 </li>
              </ul>
          </li>
      </ul>
  </div>
  );
};

export default HOwToDoKycAnswer;
