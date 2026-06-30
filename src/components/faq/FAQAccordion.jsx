import { useState } from "react";

export default function FAQAccordion({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
      >
        <span>{question}</span>
        <span>{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="faq-answer">
          {answer}
        </div>
      )}
    </div>
  );
}