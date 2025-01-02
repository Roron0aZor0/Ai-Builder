import React, { useState } from "react";
import "./Compare-plans.css";

const ComparePlans = () => {
  const [showTable, setShowTable] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthlyPrice: "$15 / mo",
      yearlyPrice: "$150 / yr",
      features: [
        "Single website",
        "Basic customization tools",
        "Standard templates",
        "Email support",
      ],
    },
    {
      name: "Professional",
      monthlyPrice: "$39 / mo",
      yearlyPrice: "$390 / yr",
      features: [
        "5 websites",
        "Advanced customization options",
        "Premium templates",
        "Analytics and SEO tools",
        "API access",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: "$99 / mo",
      yearlyPrice: "$990 / yr",
      features: [
        "Unlimited websites",
        "Full customization",
        "Dedicated account manager",
        "Priority support",
        "24/7 support",
      ],
    },
  ];

  const allFeatures = [
    "Single website",
    "5 websites",
    "Unlimited websites",
    "Basic customization tools",
    "Advanced customization options",
    "Full customization",
    "Standard templates",
    "Premium templates",
    "Email support",
    "Analytics and SEO tools",
    "API access",
    "Dedicated account manager",
    "Priority support",
    "24/7 support",
  ];

  return (
    <div className="compare-plans">
      <center>
        <button
          className="toggle-button"
          onClick={() => setShowTable(!showTable)}
        >
          {showTable ? "Close Comparison" : "Compare Plans"}
        </button>
      </center>
      {showTable && (
        <table>
          <thead>
            <tr>
              <th>Features</th>
              {plans.map((plan, index) => (
                <th key={index}>
                  <div
                    className={`plan-header ${
                      plan.recommended ? "recommended-plan" : ""
                    }`}
                  >
                    {plan.recommended && (
                      <div className="badge">Recommended</div>
                    )}
                    {plan.name}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allFeatures.map((feature, index) => (
              <tr key={index}>
                <td>{feature}</td>
                {plans.map((plan, i) => (
                  <td key={i}>
                    {plan.features.includes(feature) ? "✔️" : "❌"}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td>Monthly Price</td>
              {plans.map((plan, index) => (
                <td key={index}>{plan.monthlyPrice}</td>
              ))}
            </tr>
            <tr>
              <td>Yearly Price</td>
              {plans.map((plan, index) => (
                <td key={index}>{plan.yearlyPrice}</td>
              ))}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ComparePlans;
