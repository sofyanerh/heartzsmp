import RuleAccordion from "./RuleAccordion";

export default function RuleCategoryCard({ title, rules = [], description, details = [] }) {
  const safeRules = Array.isArray(rules) ? rules : [];

  return (
    <div className="rule-card" id={title.toLowerCase().replaceAll(" ", "-")}>
      <h2 className="rule-title">{title}</h2>

      {description && <p className="rule-description">{description}</p>}

      <div className="rule-content">
        {safeRules.map((rule, index) => {
          if (typeof rule === "string") {
            return (
              <div key={index} className="rule-item">
                {rule}
              </div>
            );
          }

          if (rule?.type === "section") {
            return (
              <div key={index} className="rule-section">
                {rule.title && <h3 className="rule-section-title">{rule.title}</h3>}
                {rule.content && <p className="rule-section-text">{rule.content}</p>}

                <div className="rule-columns">
                  {rule.allowed && (
                    <div className="rule-box">
                      <h4>Allowed</h4>
                      <ul>
                        {rule.allowed.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {rule.disallowed && (
                    <div className="rule-box">
                      <h4>Not Allowed</h4>
                      <ul>
                        {rule.disallowed.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          }

          if (rule?.type === "accordion") {
            return <RuleAccordion key={index} data={rule} />;
          }

          return null;
        })}

        {details.length > 0 && (
          <ul className="rule-details">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}