import { useState } from "react";

export default function Navbar({ toggleSidebar }) {
  const serverIP = "play.heartzsmp.com"; // change later

  const [copied, setCopied] = useState(false);

  const copyIP = async () => {
    try {
      await navigator.clipboard.writeText(serverIP);
      setCopied(true);

      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.log("Copy failed", err);
    }
  };

  return (
    <header className="navbar">

      {/* LEFT: MENU TOGGLE */}
      <div className="navbar-left" style={{ display: "flex", alignItems: "center" }}>
        <button className="menu-btn" onClick={toggleSidebar}>
          ☰
        </button>

        <div
          className="logo heartz-title"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          HeartzSMP
        </div>
      </div>

      {/* CENTER: IP COPY */}
      <div className="navbar-center">
        <div className="ip-box" onClick={copyIP}>
          <span className="ip-text">
            {copied ? "Copied!" : serverIP}
          </span>
        </div>
      </div>

      {/* RIGHT: ACTION BUTTONS */}
      <div className="navbar-right">

        <button
          className="store-btn"
          onClick={() => window.open("/store", "_blank")}
        >
          Store
        </button>

        <button
          className="discord-btn"
          onClick={() => window.open("https://discord.gg/YFGdkykee4", "_blank")}
        >
          Discord
        </button>

      </div>

    </header>
  );
}