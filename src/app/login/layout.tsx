import '../globals.css';

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#f9fbfd' }}>
        {children}
      </body>
    </html>
  );
}


