import React from "react";
import "./Faqs.css";
import Plus from "../../Images/plus-circle.png";

function Faqs() {
  return (
    <div className="app__faqs">
      <div className="faqs__one">
        <p className="support">Support</p>
        <p className="faqs__header">FAQs</p>
        <p className="faqs__txt">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please chat to our friendly team.
        </p>
      </div>
      <div className="faqs__two">
        <div className="faqs__box">
          <div>
            <h3>
              How many participants can join a ClearLink video conference?
            </h3>
            <p>
              ClearLink offers flexible meeting options. Depending on your
              subscription plan, you can host meetings with varying numbers of
              participants. Our plans are designed to accommodate small team
              collaborations and large-scale webinars, ensuring you have the
              right fit for your needs.
            </p>
          </div>
          <div>
            <img src={Plus} />
          </div>
        </div>
        <div className="faqs__box">
          <div>
            <h3>Can I use ClearLink on multiple devices? </h3>
            <p>
              ClearLink offers flexible meeting options. Depending on your
              subscription plan, you can host meetings with varying numbers of
              participants. Our plans are designed to accommodate small team
              collaborations and large-scale webinars, ensuring you have the
              right fit for your needs.
            </p>
          </div>
          <div>
            <img src={Plus} />
          </div>
        </div>
        <div className="faqs__box">
          <div>
            <h3>
              Is ClearLink compatible with other video conferencing platforms?{" "}
            </h3>
            <p>
              ClearLink offers flexible meeting options. Depending on your
              subscription plan, you can host meetings with varying numbers of
              participants. Our plans are designed to accommodate small team
              collaborations and large-scale webinars, ensuring you have the
              right fit for your needs.
            </p>
          </div>
          <div>
            <img src={Plus} />
          </div>
        </div>
        <div className="faqs__box">
          <div>
            <h3>
              How does ClearLink ensure the security of my video conferences?{" "}
            </h3>
            <p>
              ClearLink offers flexible meeting options. Depending on your
              subscription plan, you can host meetings with varying numbers of
              participants. Our plans are designed to accommodate small team
              collaborations and large-scale webinars, ensuring you have the
              right fit for your needs.
            </p>
          </div>
          <div>
            <img src={Plus} />
          </div>
        </div>
        <div className="faqs__box">
          <div>
            <h3>Do I need to download any software to use ClearLink? </h3>
            <p>
              ClearLink offers flexible meeting options. Depending on your
              subscription plan, you can host meetings with varying numbers of
              participants. Our plans are designed to accommodate small team
              collaborations and large-scale webinars, ensuring you have the
              right fit for your needs.
            </p>
          </div>
          <div>
            <img src={Plus} />
          </div>
        </div>
        <div className="faqs__box">
          <div>
            <h3>What kind of customer support does ClearLink provide? </h3>
            <p>
              ClearLink offers flexible meeting options. Depending on your
              subscription plan, you can host meetings with varying numbers of
              participants. Our plans are designed to accommodate small team
              collaborations and large-scale webinars, ensuring you have the
              right fit for your needs.
            </p>
          </div>
          <div>
            <img src={Plus} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
