export default function LoginPage() {
  return (
    <div style={{ backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      {/* HEADER */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <div style={{ fontWeight: "bold", color: "#ccc", fontSize: "1rem" }}>MeinLogo</div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button style={{
            backgroundColor: "transparent",
            border: "none",
            fontSize: "1rem",
            color: "#000",
            cursor: "pointer"
          }}>
            Login
          </button>
          <button style={{
            backgroundColor: "#0070f3",
            color: "#fff",
            fontWeight: "bold",
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer"
          }}>
            Kostenlos testen
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "6rem 2rem"
      }}>
        <h1 style={{
          fontSize: "3rem",
          fontWeight: 800,
          lineHeight: 1.2,
          maxWidth: "800px"
        }}>
          Verdopple dein Business mit <br />
          Perspective Funnels™
        </h1>

        <p style={{
          fontSize: "1.125rem",
          color: "#444",
          maxWidth: "600px",
          marginTop: "1.5rem"
        }}>
          Erstelle mobil-optimierte, interaktive Recruiting- & Neukunden-Funnels mit führenden Ergebnissen – in nur 30 Minuten. Ganz ohne Design- oder Programmierkenntnisse.
        </p>

        <div style={{
          display: "flex",
          gap: "1rem",
          marginTop: "2rem",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          <button style={{
            backgroundColor: "#0070f3",
            color: "#fff",
            fontWeight: "bold",
            padding: "1rem 2rem",
            fontSize: "1rem",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer"
          }}>
            Baue kostenlos Funnel in 30 min
          </button>

          <button style={{
            backgroundColor: "#fff",
            color: "#0070f3",
            fontWeight: "bold",
            padding: "1rem 2rem",
            fontSize: "1rem",
            borderRadius: "10px",
            border: "1px solid #0070f3",
            cursor: "pointer"
          }}>
            Demo ansehen
          </button>
        </div>
      </main>
    </div>
  );
}


