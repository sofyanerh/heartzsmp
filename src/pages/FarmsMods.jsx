import { farmsModsData } from "../data/farmsModsData";

export default function FarmsMods() {
  return (
    <>
      <div className="fm-hero">
        <h1>Farms & Mods</h1>
        <p>
          This page explains what types of farms and modifications are allowed on the server.
        </p>
      </div>

      {farmsModsData.map((section, index) => (
        <div key={index} className={`fm-card ${section.type}`}>
          <h2>{section.category}</h2>

          {section.items.map((item, i) => (
            <div key={i} className="fm-item">
              <h3>{item.name}</h3>

              {item.description && (
                <p>{item.description}</p>
              )}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}