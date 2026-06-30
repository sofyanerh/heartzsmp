import { staffApplyData } from "../data/staffApplyData";

export default function StaffApply() {
  const {
    status,
    applyLink,
    hero,
    requirements,
    recommended,
    expectations,
    notes,
  } = staffApplyData;

  return (
    <>
      {/* HERO */}
      <div className="sa-hero">
        <h1>{hero.title}</h1>
        <p>{hero.description}</p>
      </div>

      {/* REQUIREMENTS */}
      <section className="sa-card">
        <h2>Requirements</h2>

        <ul>
          {requirements.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3>Strongly recommended (not required)</h3>

        <ul>
          {recommended.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* EXPECTATIONS */}
      <section className="sa-card">
        <h2>What We Expect From Staff</h2>

        <ul>
          {expectations.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* APPLICATION */}
      <section className="sa-card apply-box">
        <h2>Application Form</h2>

        {status === "open" ? (
          <>
            <p>You can apply using the link below.</p>

            <a
              href={applyLink}
              target="_blank"
              rel="noreferrer"
              className="sa-button"
            >
              Apply Now
            </a>
          </>
        ) : (
          <p className="sa-closed">
            We are not currently looking to hire staff. Please check back later.
          </p>
        )}
      </section>

      {/* NOTES */}
      <section className="sa-card">
        <h2>Important Notes</h2>

        <ul>
          {notes.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}