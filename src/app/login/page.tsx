export default function LoginPage() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#ffffff",
      fontFamily: "sans-serif",
      padding: "2rem"
    }}>
      <header style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "4rem"
      }}>
        <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>MeinLogo</div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button style={{ background: "none", border: "none", fontSize: "1rem" }}>
            Login
          </button>
          <button style={{
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "6px",
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            cursor: "pointer"
          }}>
            Kostenlos testen
          </button>
        </div>
      </header>

      <section style={{ textAlign: "center", maxWidth: "700px" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Verdopple dein Business mit deiner CRM-Lösung
        </h1>
        <p style={{ fontSize: "1.125rem", color: "#444" }}>
          Erstelle mobil-optimierte, interaktive Tools mit führenden Ergebnissen – in nur 30 Minuten. Ohne Programmierkenntnisse.
        </p>
      </section>
    </main>
  );
}
