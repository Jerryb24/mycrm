export default function LoginPage() {
  return (
    <main
      style={{
        padding: "2rem",
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#000", // Schwarzer Text
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Verdopple dein Business mit deiner CRM-Lösung
      </h1>

      <p
        style={{
          fontSize: "1.1rem",
          color: "#444",
          marginBottom: "2.5rem",
        }}
      >
        Erstelle mobil-optimierte, interaktive Tools mit führenden Ergebnissen –
        in nur 30 Minuten. Ohne Programmierkenntnisse.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <button
          style={{
            backgroundColor: "#0070f3",
            color: "#fff",
            padding: "1rem 2rem",
            borderRadius: "8px",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Baue kostenlos Funnel in 30 min
        </button>

        <button
          style={{
            backgroundColor: "#fff",
            color: "#0070f3",
            padding: "1rem 2rem",
            borderRadius: "8px",
            border: "1px solid #0070f3",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Demo ansehen
        </button>
      </div>
    </main>
  );
}
