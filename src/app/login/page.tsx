export default function LoginPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", textAlign: "center" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>MeinLogo</div>
        <nav>
          <button style={{ marginRight: "1rem" }}>Login</button>
          <button style={{ backgroundColor: "#0070f3", color: "#fff", padding: "0.5rem 1rem", borderRadius: "4px" }}>
            Kostenlos testen
          </button>
        </nav>
      </header>

      <section style={{ marginTop: "5rem" }}>
        <h1 style={{ fontSize: "2.5rem" }}>Willkommen bei meiner CRM-Lösung</h1>
        <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
          Erstelle interaktive Seiten mit einem cleanen, modernen Design.
        </p>
      </section>
    </main>
  );
}
