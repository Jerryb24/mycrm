export default function LoginPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "sans-serif",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#888" }}>MeinLogo</div>
        <button
          style={{
            backgroundColor: "#0070f3",
            color: "#fff",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "6px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Kostenlos testen
        </button>
      </header>

      <section
        style={{
          textAlign: "center",
          marginTop: "5rem",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#111" }}>
          Verdopple dein Business mit deiner CRM-Lösung
        </h1>
        <p style={{ marginTop: "1rem", fontSize: "1.1rem", color: "#333" }}>
          Erstelle mobil-optimierte, interaktive Tools mit führenden Ergebnissen – in nur 30 Minuten. Ohne Programmierkenntnisse.
        </p>
      </section>
    </main>
  );
}
