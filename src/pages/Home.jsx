import { homeData } from "../data/homeData";

export default function Home() {
  const { hero, showcase, features, serverInfo, whyJoin, cta } = homeData;

  return (
    <div className="home">

      {/* HERO */}
          <section
          className="home-hero"
          style={{
            backgroundImage: hero.backgroundImage
              ? `url({`${import.meta.env.BASE_URL}images/minecraft-hero.webp`})`
              : "none",
          }}
            >
          <div className="hero-overlay" />

          <h1 className="heartz-title">{hero.title}</h1>

          <div className="home-hero-buttons">
            <a className="btn primary" href={"/rules"}>
              Rules
            </a>

            <a className="btn secondary" href={hero.buttons.join}>
              How to Join
            </a>

            <a className="btn discord" href={hero.buttons.discord}>
              Discord
            </a>
          </div>
    </section>

      {/* SHOWCASE */}
      <section className="home-showcase">
  <div className="section-header">
    <h2>Gallery</h2>
    <p>Explore some of the creations and places around HeartzSMP.</p>
  </div>

  <div className="showcase-grid">
    {showcase.map((item, i) => (
      <div
        key={i}
        className={`showcase-card ${
          i === 0 ? "featured" : ""
        }`}
      >
        <img src={item.image} alt={item.title} />

        <div className="showcase-overlay">
          <h3>{item.title}</h3>

          {item.description && (
            <p>{item.description}</p>
          )}
        </div>
      </div>
    ))}
  </div>
</section>

      {/* FEATURES */}

      <section className="home-features">
        <h2>Features</h2>

        <div className="feature-list">
          {features.map((f, i) => (
            <div
              key={i}
              className={`feature-row ${i % 2 === 0 ? "left" : "right"}`}
            >
              <div className="feature-content">
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>

              <div className="feature-line" />
            </div>
          ))}
        </div>
      </section>

      {/* SERVER INFO BAR */}
     <section className="server-info-bar">
        <div className="info-item">
          <span className="info-label">Version</span>
          <span className="info-value">{serverInfo.version}</span>
        </div>

        <div className="info-item">
          <span className="info-label">Platform</span>
          <span className="info-value">{serverInfo.platform}</span>
        </div>

        <div className="info-item">
          <span className="info-label">Type</span>
          <span className="info-value">{serverInfo.type}</span>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="why-join">
        <h2>Why Join</h2>

        <div className="why-join-list">
          {whyJoin.map((item, i) => (
            <div key={i} className="why-item">
              <div className="why-dot" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="cta-content">
          <h2>{cta.title}</h2>

          <div className="home-cta-buttons">
            <a href={cta.join} className="btn primary">
              Join Server
            </a>

            <a href={cta.discord} className="btn discord">
              Join Discord
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
