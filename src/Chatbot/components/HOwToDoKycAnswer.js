import React, { useState, useEffect } from "react";

const HOwToDoKycAnswer = ({ id }) => {
  const [howToDoKyc, setHowToDoKyc] = useState(false);
  const [updateKYC, setupdateKYC] = useState(false);

  console.log(id);
  useEffect(() => {
    if (id === 3) {
      setHowToDoKyc(true);
    }
    if (id === 1) {
      setupdateKYC(true);
    }
  }, [id]);
  return (
    <div style={{ padding: "0px", fontSize: "14px", marginLeft: "-10px" }}>
      {howToDoKyc ? (
        <ul style={{ listStyleType: "upper-roman" }}>
          <li>
            <b>In-Person Verification (IPV):</b> by producing the originals to
            the authorized person of the RTA, who will retain copy(ies) of the
            document(s).
          </li>
          <li>
            <b>In hard copy:</b> by furnishing self-attested photocopy(ies) of
            the relevant document, with date.
          </li>
          <li>
            <b>With e-sign:</b>
            <ul style={{ listStyleType: "lower-alpha", marginLeft: "-20px" }}>
              <li>
                In case your email is already registered with us, you may send
                the scanned copies of your KYC documents with e-sign at our
                dedicated email-id: kyc@linkintime.co.in Kindly mention the
                email subject line as KYC Updation - (Company Name) - Folio
                No:________________
              </li>
              <li>
                <p>
                  Investors can also upload KYC documents with e-sign on our
                  website https://www.linkintime.co.in - Investor Services - KYC
                  Compliance.
                </p>
              </li>
            </ul>
          </li>
        </ul>
      ) : updateKYC ? (
        <>
          <p style={{ marginLeft: "10px" }}>
            Request for Registering PAN, KYC Details OR changes /updation there
            of the following :{" "}
          </p>
          <ul style={{ listStyleType: "lower-alpha" }}>
            <li>PAN Details</li>
            <li>Bank Details</li>
            <li>Signature as verified by Banks</li>
            <li>Registered Address</li>
            <li>Mobile Num</li>
            <li>E-mail id.</li>
          </ul>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default HOwToDoKycAnswer;
