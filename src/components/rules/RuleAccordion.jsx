import { useState } from "react";

export default function RuleAccordion({ data }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion">

      <div
        className="accordion-header"
        onClick={() => setOpen(!open)}
      >
        {data.title}
      </div>

      {open && (
        <div className="accordion-body">

          <p>{data.text}</p>

          {data.allowed && (
            <>
              <h4>Allowed</h4>
              <ul>
                {data.allowed.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </>
          )}

          {data.disallowed && (
            <>
              <h4>Not Allowed</h4>
              <ul>
                {data.disallowed.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </>
          )}

        </div>
      )}

    </div>
  );
}