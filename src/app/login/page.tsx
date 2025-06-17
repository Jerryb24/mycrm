export default function LoginPage() {
  return (
    <main style={{
      fontFamily: 'sans-serif',
      padding: '2rem 4rem',
      backgroundColor: '#fff',
      color: '#111',
      minHeight: '100vh',
    }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '4rem'
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>MeinLogo</div>
        <div>
          <button style={{
            marginRight: '1rem',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            padding: '0.6rem 1.2rem',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>Login</button>
          <button style={{
            backgroundColor: '#0070f3',
            color: '#fff',
            padding: '0.6rem 1.2rem',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer'
          }}>Kostenlos testen</button>
        </div>
      </header>

      <section style={{
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
<h1 style={{ fontSize: "2.5rem", color: "#000" }}>
  Verdopple dein Business mit deiner CRM-Lösung
</h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#444',
          marginBottom: '2.5rem'
        }}>
          Erstelle mobil-optimierte, interaktive Tools mit führenden Ergebnissen – in nur 30 Minuten. Ohne Programmierkenntnisse.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button style={{
            backgroundColor: '#0070f3',
            color: '#fff',
            padding: '1rem 2rem',
            borderRadius: '8px',
            border: 'none',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Baue kostenlos Funnel in 30 min
          </button>
          <button style={{
            backgroundColor: '#fff',
            color: '#0070f3',
            padding: '1rem 2rem',
            borderRadius: '8px',
            border: '1px solid #0070f3',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Demo ansehen
          </button>
        </div>
      </section>
    </main>
  );
}


