import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

function Captcha(props) {
  const ComponentTest = () => {
    return <div>Đây là react</div>;
  };
  console.log(ComponentTest());
  return (
    <div>
      <ComponentTest />
      <ReCAPTCHA
        sitekey="6LcTdkwbAAAAAFesmmdkrGPoMWJn3znemJZzuksX"
        onChange={() => console.log(1)}
      />
      ,
    </div>
  );
}

export default Captcha;
