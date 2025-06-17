export default function LoginPage() {
  return (
    <main
      style={{
        fontFamily: 'sans-serif',
        backgroundColor: '#f9fbfd',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '2rem 4rem',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ fontWeight: 'bold', color: '#ccc' }}>MeinLogo</div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ fontWeight: '500' }}>Login</span>
          <button
            style={{
              backgroundColor: '#0070f3',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              padding: '0.6rem 1.2rem',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Kostenlos testen
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
          paddingTop: '2rem',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#000',
            lineHeight: '1.2',
          }}
        >
          Verdopple dein Business mit <br /> Perspective Funnels™
        </h1>
        <p
          style={{
            fontSize: '1.1rem',
            color: '#333',
            marginBottom: '2rem',
          }}
        >
          Erstelle mobil-optimierte, interaktive Recruiting- & Neukunden-Funnels mit führenden Ergebnissen –
          in nur 30 Minuten. Ganz ohne Design- oder Programmierkenntnisse.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button
            style={{
              backgroundColor: '#0070f3',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              border: 'none',
              fontWeight: 'bold',
              fontSize: '0.95rem',
              cursor: 'pointer',
            }}
          >
            Baue kostenlos Funnel in 30 min
          </button>
          <button
            style={{
              backgroundColor: '#fff',
              color: '#0070f3',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              border: '1px solid #0070f3',
              fontWeight: 'bold',
              fontSize: '0.95rem',
              cursor: 'pointer',
            }}
          >
            Demo ansehen
          </button>
        </div>
      </div>

      {/* Footer Spacer */}
      <div />
    </main>
  );
}

