'use client';

import { FaPlay } from 'react-icons/fa';

export default function LoginPage() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#f9fbfd',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '2rem 4rem',
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontWeight: 600, color: '#ccc' }}>MeinLogo</div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button style={{
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '0.5rem 1rem',
            fontSize: '0.9rem',
            fontWeight: '500',
            color: '#666',
            cursor: 'pointer'
          }}>Login</button>
          <button style={{
            backgroundColor: '#0070f3',
            border: 'none',
            borderRadius: '8px',
            padding: '0.5rem 1rem',
            fontSize: '0.9rem',
            fontWeight: '500',
            color: 'white',
            cursor: 'pointer'
          }}>Kostenlos testen</button>
        </div>
      </div>

      {/* Main content */}
      <div style={{
        textAlign: 'center',
        marginTop: '5rem'
      }}>
        <h1 style={{
          fontSize: '2.75rem',
          fontWeight: 800,
          lineHeight: 1.2,
          marginBottom: '1rem',
          color: '#000'
        }}>
          Verdopple dein Business mit<br />Perspective Funnels™
        </h1>
        <p style={{
          fontSize: '1rem',
          color: '#444',
          marginBottom: '2rem'
        }}>
          Erstelle mobil-optimierte, interaktive Recruiting- & Neukunden-Funnels mit führenden<br />
          Ergebnissen – in nur 30 Minuten. Ganz ohne Design- oder Programmierkenntnisse.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button style={{
            backgroundColor: '#0070f3',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '10px',
            fontWeight: 'bold',
            fontSize: '0.95rem',
            border: 'none',
            cursor: 'pointer'
          }}>
            Baue kostenlos Funnel in 30 min
          </button>
          <button style={{
            backgroundColor: 'white',
            color: '#0070f3',
            padding: '0.75rem 1.5rem',
            borderRadius: '10px',
            fontWeight: 'bold',
            fontSize: '0.95rem',
            border: '1.5px solid #0070f3',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer'
          }}>
            <FaPlay size={12} />
            Demo ansehen
          </button>
        </div>
      </div>

      {/* Spacer below (optional for visual balance) */}
      <div />
    </main>
  );
}


