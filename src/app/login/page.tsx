export default function LoginPage() {
  return (
    <main style={{
      padding: "2rem",
      fontFamily: "sans-serif",
      backgroundColor: "#fff",
      minHeight: "100vh"
    }}>
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "3rem"
      }}>
        <div style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#999" }}>
          MeinLogo
        </div>
        <nav style={{ display: "flex", gap: "1rem" }}>
          <button style={{
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            color: "#333",
            fontSize: "0.9rem"
          }}>
            Login
          </button>
          <button style={{
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#0070f3",
            color: "#fff",
            fontSize: "0.9rem"
          }}>
            Kostenlos testen
          </button>
        </nav>
      </header>

      <section style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#111",
          maxWidth: "700px"
        }}>
          Verdopple dein Business mit deiner CRM-Lösung
        </h1>
        <p style={{
          marginTop: "1rem",
          fontSize: "1rem",
          color: "#333",
          maxWidth: "600px"
        }}>
          Erstelle mobil-optimierte, interaktive Tools mit führenden Ergebnissen – in nur 30 Minuten. Ohne Programmierkenntnisse.
        </p>
        <div style={{
          marginTop: "2rem",
          display: "flex",
          gap: "1rem"
        }}>
          <button style={{
            backgroundColor: "#0070f3",
            color: "white",
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            Baue kostenlos Funnel in 30 min
          </button>
          <button style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            Demo ansehen
          </button>
        </div>
      </section>
    </main>
  );
}

