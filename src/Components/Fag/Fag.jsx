import React from "react";
import "./Fag.css"
import { useState } from "react";

const Fag = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    { title: "Work", content: "SOON." },
    { title: "Internships", content: "SOON." },
    { title: "Volunteerships", content: "SOON." },
  ];

  return (
    <div className="fag">
      {sections.map((section, index) => (
        <div key={index} className="border-b">
          <button
            className="toggle"
            onClick={() => toggleSection(index)}
          >
            {section.title}
            <span>{openIndex === index ? "-" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="section">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Fag;

