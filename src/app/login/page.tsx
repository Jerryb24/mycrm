export default function LoginPage() {
  return (
    <main style={{
      fontFamily: "sans-serif",
      backgroundColor: "#ffffff",
      color: "#000000",
      minHeight: "100vh",
      padding: "2rem",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Header */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "4rem"
      }}>
        <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>MeinLogo</div>
        <div>
          <button style={{
            marginRight: "1rem",
            padding: "0.6rem 1.2rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            color: "#333",
            fontSize: "0.9rem",
            cursor: "pointer"
          }}>
            Login
          </button>
          <button style={{
            padding: "0.6rem 1.2rem",
            borderRadius: "6px",
            backgroundColor: "#0070f3",
            color: "#fff",
            fontSize: "0.9rem",
            border: "none",
            cursor: "pointer"
          }}>
            Kostenlos testen
          </button>
        </div>
      </header>

      {/* Centered Section */}
      <section style={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          maxWidth: "700px"
        }}>
          Verdopple dein Business mit deiner CRM-Lösung
        </h1>
        <p style={{
          fontSize: "1.1rem",
          maxWidth: "500px",
          marginBottom: "2rem"
        }}>
          Erstelle mobil-optimierte, interaktive Tools mit führenden Ergebnissen – in nur 30 Minuten. Ohne Programmierkenntnisse.
        </p>

        <div>
          <button style={{
            padding: "0.8rem 1.5rem",
            marginRight: "1rem",
            borderRadius: "6px",
            backgroundColor: "#0070f3",
            color: "#fff",
            fontSize: "1rem",
            border: "none",
            cursor: "pointer"
          }}>
            Baue kostenlos Funnel in 30 min
          </button>
          <button style={{
            padding: "0.8rem 1.5rem",
            borderRadius: "6px",
            backgroundColor: "#fff",
            color: "#0070f3",
            fontSize: "1rem",
            border: "1px solid #0070f3",
            cursor: "pointer"
          }}>
            Demo ansehen
          </button>
        </div>
      </section>
    </main>
  );
}


