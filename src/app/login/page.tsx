export default function LoginPage() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      fontFamily: "sans-serif"
    }}>
      {/* Header */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5rem 2rem"
      }}>
        <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>MeinLogo</div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button style={{
            padding: "0.5rem 1rem",
            background: "transparent",
            border: "1px solid #ccc",
            borderRadius: "8px",
            cursor: "pointer"
          }}>Login</button>
          <button style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}>Kostenlos testen</button>
        </div>
      </header>

      {/* Main Content */}
      <section style={{ textAlign: "center", padding: "4rem 2rem" }}>
        <h1 style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "1rem"
        }}>
          Verdopple dein Business mit deiner CRM-Lösung
        </h1>
        <p style={{
          fontSize: "1.1rem",
          color: "#444",
          marginBottom: "2rem"
        }}>
          Erstelle mobil-optimierte, interaktive Tools mit führenden Ergebnissen – in nur 30 Minuten. Ohne Programmierkenntnisse.
        </p>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem"
        }}>
          <button style={{
            backgroundColor: "#0070f3",
            color: "#fff",
            padding: "1rem 2rem",
            borderRadius: "8px",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            Baue kostenlos Funnel in 30 min
          </button>
          <button style={{
            backgroundColor: "#fff",
            color: "#0070f3",
            padding: "1rem 2rem",
            borderRadius: "8px",
            border: "1px solid #0070f3",
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


