import { FaPlay } from "react-icons/fa";

export default function LoginPage() {
  return (
    <main
      style={{
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#f9fbfd",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "2rem 4rem",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontWeight: 600, color: "#ccc" }}>MeinLogo</div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button
            style={{
              background: "none",
              border: "none",
              fontSize: "0.95rem",
              color: "#444",
              cursor: "pointer",
            }}
          >
            Login
          </button>
          <button
            style={{
              backgroundColor: "#0070f3",
              color: "#fff",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              fontWeight: "600",
              fontSize: "0.95rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Kostenlos testen
          </button>
        </div>
      </div>

      {/* Center Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          paddingTop: "6rem",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: 800,
            lineHeight: "3.5rem",
            maxWidth: "800px",
            marginBottom: "1rem",
            color: "#000",
          }}
        >
          Verdopple dein Business mit <br /> Perspective Funnels™
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: "#444",
            maxWidth: "700px",
            marginBottom: "2rem",
          }}
        >
          Erstelle mobil-optimierte, interaktive Recruiting- & Neukunden-Funnels
          mit führenden Ergebnissen – in nur 30 Minuten. Ganz ohne Design- oder
          Programmierkenntnisse.
        </p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            style={{
              backgroundColor: "#0070f3",
              color: "#fff",
              padding: "0.75rem 1.5rem",
              borderRadius: "10px",
              border: "none",
              fontWeight: "bold",
              fontSize: "0.95rem",
              cursor: "pointer",
            }}
          >
            Baue kostenlos Funnel in 30 min
          </button>
          <button
            style={{
              backgroundColor: "#fff",
              color: "#0070f3",
              padding: "0.75rem 1.5rem",
              borderRadius: "10px",
              border: "1.5px solid #0070f3",
              fontWeight: "bold",
              fontSize: "0.95rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
            }}
          >
            <FaPlay size={10} /> Demo ansehen
          </button>
        </div>
      </div>
    </main>
  );
}

