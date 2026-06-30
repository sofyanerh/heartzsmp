import { howToJoinData } from "../data/howToJoinData";

export default function HowToJoin() {
  const {
    serverInfo,
    javaSteps,
    bedrockSteps,
    firstTimeSetup,
    commonIssues,
    links,
  } = howToJoinData;

  return (
    <>
      {/* HERO */}
      <div className="htj-hero">
        <h1>How to Join</h1>
        <p>
          Getting started is quick and simple. Follow the steps below to join the server and begin playing.
        </p>
      </div>

      {/* SERVER INFO */}
      <section className="htj-card">
        <h2>Server Information</h2>

        <div className="htj-info">
          <p><strong>Server IP:</strong> {serverInfo.ip}</p>
          <p><strong>Bedrock Port:</strong> {serverInfo.port}</p>
          <p><strong>Version:</strong> {serverInfo.version}</p>
        </div>
      </section>

      {/* JAVA */}
      <section className="htj-card">
        <h2>How to Join (Java Edition)</h2>

        <ol>
          {javaSteps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      {/* BEDROCK */}
      <section className="htj-card">
        <h2>How to Join (Bedrock Edition)</h2>

        <ol>
          {bedrockSteps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      {/* FIRST TIME */}
      <section className="htj-card">
        <h2>First-Time Setup</h2>

        <ul>
          {firstTimeSetup.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* COMMON ISSUES */}
      <section className="htj-card">
        <h2>Common Issues</h2>

        {commonIssues.map((issue, i) => (
          <div key={i} className="htj-issue">
            <h3>{issue.title}</h3>
            <p>{issue.solution}</p>
          </div>
        ))}
      </section>

      {/* LINKS */}
      <section className="htj-card">
        <h2>Useful Links</h2>

        <div className="htj-links">
          <a href={links.discord}>Discord</a>
          <a href={links.rules}>Rules</a>
          <a href={links.faq}>FAQ</a>
          <a href={links.staff}>Staff Applications</a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="htj-cta">
        <h2>Ready?</h2>
        <p>
          Once you’ve joined, make sure to read the rules and explore the world.
        </p>
      </section>
    </>
  );
}