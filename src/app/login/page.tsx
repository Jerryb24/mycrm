export default function LoginPage() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'sans-serif',
        backgroundColor: '#f9fbfd',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          color: '#000',
          fontWeight: 'bold',
          marginBottom: '1rem',
        }}
      >
        Verdopple dein Business mit Perspective Funnels™
      </h1>

      <p
        style={{
          fontSize: '1.1rem',
          color: '#4a4a4a',
          marginBottom: '2.5rem',
          maxWidth: '700px',
        }}
      >
        Erstelle mobil-optimierte, interaktive Recruiting- & Neukunden-Funnels mit führenden Ergebnissen – in nur 30 Minuten. Ganz ohne Design- oder Programmierkenntnisse.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          style={{
            backgroundColor: '#0070f3',
            color: '#fff',
            padding: '1rem 2rem',
            borderRadius: '8px',
            border: 'none',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Baue kostenlos Funnel in 30 min
        </button>

        <button
          style={{
            backgroundColor: '#fff',
            color: '#0070f3',
            padding: '1rem 2rem',
            borderRadius: '8px',
            border: '1px solid #0070f3',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Demo ansehen
        </button>
      </div>
    </main>
  );
}


