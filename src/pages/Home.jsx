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
              ? `url(${hero.backgroundImage})`
              : "none",
          }}
            >
          <div className="hero-overlay" />

          <h1>{hero.title}</h1>

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
        <h2>Gallery</h2>

        <div className="showcase-grid">
          {showcase.map((item, i) => (
            <div key={i} className="showcase-card">
              <img src={item.image} alt={item.title} />
              <div className="showcase-overlay">
                {item.title}
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
        <div>{serverInfo.version}</div>
        <div>{serverInfo.platform}</div>
        <div>{serverInfo.type}</div>
      </section>

      {/* WHY JOIN */}
      <section className="why-join">
        <h2>Why Join</h2>

        <ul>
          {whyJoin.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <h2>{cta.title}</h2>

        <div className="home-cta-buttons">
          <a href={cta.join} className="btn primary">
            Join Server
          </a>

          <a href={cta.discord} className="btn discord">
            Join Discord
          </a>
        </div>
      </section>

    </div>
  );
}