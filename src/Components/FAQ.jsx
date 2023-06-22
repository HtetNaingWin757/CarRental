import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQ = () => {
  const [activeQ, setActiveQ] = useState(1);

  const openQ = (id) => {
    setActiveQ(activeQ === id ? 0 : id);
  };

  const getAnswerClass = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getQuestionClass = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <div className="faq flex my-24 items-center flex-col">
      <div className="faq-header text-center mb-24 w-[760px]">
        <h1 className=" text-2xl font-bold mb-3">FAQ</h1>
        <h1 className=" text-5xl font-bold mb-7">Frequently Asked Questions</h1>
        <p className=" text-lg text-zinc-500 mb-7">
          Frequently Asked Questions About the Car Rental Booking Process on Our
          Website: Answers to Common Concerns and Inquiries.
        </p>
      </div>
      <div className="faq-accordion w-[850px] shadow-xl bg-white">
        <div>
          <div
            id="1"
            onClick={() => openQ(1)}
            className={`${getQuestionClass(
              1
            )} cursor-pointer flex justify-between items-center border-b-2 py-5 px-10`}
          >
            <p className=" text-xl font-semibold">
              1. What is special about comparing rental car deals?
            </p>
            <FiChevronDown className=" text-3xl" />
          </div>
          <div
            id="1"
            onClick={() => openQ(1)}
            className={`${getAnswerClass(1)} answer`}
          >
            <p className=" text-lg text-zinc-400 px-10">
              Comparing rental car deals is important as it helps find the best
              deal that fits your budget and requirements, ensuring you get the
              most value for your money. By comparing various options, you can
              find deals that offer lower prices, additional services, or better
              car models. You can find car rental deals by researching online
              and comparing prices from different rental companies.
            </p>
          </div>
        </div>

        <div>
          <div
            id="2"
            onClick={() => openQ(2)}
            className={`${getQuestionClass(
              2
            )} cursor-pointer flex justify-between items-center border-b-2 py-5 px-10`}
          >
            <p className=" text-xl font-semibold">
              2. How do I find the car rental deals?
            </p>
            <FiChevronDown className=" text-3xl" />
          </div>
          <div
            id="2"
            onClick={() => openQ(2)}
            className={`${getAnswerClass(2)} answer`}
          >
            <p className=" text-lg text-zinc-400 px-10">
              You can find car rental deals by researching online and comparing
              prices from different rental companies. Websites such as Expedia,
              Kayak, and Travelocity allow you to compare prices and view
              available rental options. It is also recommended to sign up for
              email newsletters and follow rental car companies on social media
              to be informed of any special deals or promotions.
            </p>
          </div>
        </div>

        <div>
          <div
            id="3"
            onClick={() => openQ(3)}
            className={`${getQuestionClass(
              3
            )} cursor-pointer flex justify-between items-center border-b-2 py-5 px-10`}
          >
            <p className=" text-xl font-semibold">
              3. How do I find such low rental car prices?
            </p>
            <FiChevronDown className=" text-3xl" />
          </div>
          <div
            id="3"
            onClick={() => openQ(3)}
            className={`${getAnswerClass(3)} answer`}
          >
            <p className=" text-lg text-zinc-400 px-10">
              Book in advance: Booking your rental car ahead of time can often
              result in lower prices. Compare prices from multiple companies:
              Use websites like Kayak, Expedia, or Travelocity to compare prices
              from multiple rental car companies. Look for discount codes and
              coupons: Search for discount codes and coupons that you can use to
              lower the rental price. Renting from an off-airport location can
              sometimes result in lower prices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
