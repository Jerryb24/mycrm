export default function LoginPage() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f9fbfd",
        padding: "2rem",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "1.5rem",
          left: "2rem",
          fontWeight: "bold",
          color: "#ccc",
        }}
      >
        MeinLogo
      </div>

      <div
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "2rem",
          display: "flex",
          gap: "0.75rem",
        }}
      >
        <button
          style={{
            padding: "0.6rem 1rem",
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontWeight: "500",
            color: "#666",
            cursor: "pointer",
          }}
        >
          Login
        </button>
        <button
          style={{
            padding: "0.6rem 1rem",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Kostenlos testen
        </button>
      </div>

      <h1
        style={{
          fontSize: "2.8rem",
          textAlign: "center",
          fontWeight: "800",
          lineHeight: "1.2",
          maxWidth: "800px",
          color: "#000",
        }}
      >
        Verdopple dein Business mit <br />
        Perspective Funnels™
      </h1>

      <p
        style={{
          fontSize: "1rem",
          color: "#444",
          textAlign: "center",
          marginTop: "1.2rem",
          maxWidth: "600px",
        }}
      >
        Erstelle mobil-optimierte, interaktive Recruiting- & Neukunden-Funnels
        mit führenden Ergebnissen – in nur 30 Minuten. Ganz ohne Design- oder
        Programmierkenntnisse.
      </p>

      <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
        <button
          style={{
            backgroundColor: "#0070f3",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "10px",
            fontWeight: "600",
            fontSize: "0.95rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          Baue kostenlos Funnel in 30 min
        </button>
        <button
          style={{
            color: "#0070f3",
            backgroundColor: "white",
            padding: "0.75rem 1.5rem",
            border: "1.5px solid #0070f3",
            borderRadius: "10px",
            fontWeight: "600",
            fontSize: "0.95rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          ▶ Demo ansehen
        </button>
      </div>
    </main>
  );
}

