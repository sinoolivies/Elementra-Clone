import React, { useState, useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const pricingData = [
  {
    name: "Starter",
    monthly: 50,
    yearly: 80,
    features: {
      Monthly: [
        "Innovative AI tools",
        "High-quality visuals",
        "Customizable styles",
        "Accessible image generation",
      ],
      Yearly: [
        "Innovative AI tools",
        "High-quality visuals",
        "Customizable styles",
        "Consistent output quality",
      ],
    },
  },
  {
    name: "Standard",
    monthly: 500,
    yearly: 750,
    features: {
      Monthly: [
        "Optimized for creators",
        "Fast processing times",
        "Customizable styles",
        "Enhanced AI tools",
      ],
      Yearly: [
        "Optimized for professionals",
        "Priority rendering",
        "Fast processing times",
        "Enhanced image fidelity",
      ],
    },
  },
  {
    name: "Premium",
    monthly: 1500,
    yearly: 2000,
    premium: true,
    features: {
      Monthly: [
        "Team collaboration tools",
        "Dedicated support",
        "Unlimited render credits",
        "Advanced AI features",
      ],
      Yearly: [
        "Team collaboration tools",
        "Dedicated support",
        "Unlimited render credits",
        "Advanced AI features",
      ],
    },
  },
];

const JoinUsSection = () => {
  const [billing, setBilling] = useState("Monthly");
  const cardRefs = pricingData.map(() => useRef(null));
  const cardVisible = cardRefs.map((ref) => useIntersectionObserver(ref));

  const handleSelectPlan = (planName) => {
    console.log(`Selected ${planName} (${billing}) plan`);
  };

  return (
    <section className="joinus relative w-full py-20 px-4 md:px-12 lg:px-20 bg-gray-100">
      {/* Header */}
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-4xl font-bold text-gray-900">Dynamic Pricing</h2>
        <p className="text-gray-700 text-lg">Choose the ideal plan for your needs</p>

        {/* Billing toggle */}
        <div className="inline-flex rounded-lg border border-gray-300 overflow-hidden select-none mt-4">
          {["Monthly", "Yearly"].map((period) => (
            <button
              key={period}
              onClick={() => setBilling(period)}
              className={`px-6 py-2 font-semibold flex-1 text-center transition ${
                billing === period
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingData.map((plan, idx) => {
          const price = billing === "Monthly" ? plan.monthly : plan.yearly;
          const features = plan.features[billing];

          return (
            <div
              key={plan.name}
              ref={cardRefs[idx]}
              className={`flex flex-col justify-between rounded-2xl p-8 border bg-white transition-transform duration-700 transform ${
                cardVisible[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              } hover:scale-105 ${
                plan.premium ? "shadow-2xl relative" : "shadow-md border-gray-300"
              }`}
            >
              {plan.premium && (
                <span className="absolute top-4 right-4 bg-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{plan.name}</h3>

              <p className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
                ${price}
                <span className="text-base font-medium">/{billing.toLowerCase()}</span>
              </p>

              <ul className="space-y-3 mb-6">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    {/* Violet circle check */}
                    <span className="flex items-center justify-center w-6 h-6 bg-violet-500 rounded-full flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414L8.414 15 4.293 10.879a1 1 0 011.414-1.414L8.414 12.586l7.879-7.879a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <button
                  onClick={() => handleSelectPlan(plan.name)}
                  className="text-gray-900 font-bold border border-gray-900 px-6 py-3 rounded-lg w-full md:w-auto transition-all hover:border-violet-500"
                  style={{ borderWidth: "2px" }}
                >
                  Select Plan
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default JoinUsSection;
