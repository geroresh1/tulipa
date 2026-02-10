export default function ContattiPage() {
  return (
    <main style={{
      padding: "4rem",
      maxWidth: "900px",
      margin: "0 auto",
      lineHeight: "1.6"
    }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "300", marginBottom: "1rem" }}>
        Contatti
      </h1>
      <p style={{ color: "#555", marginBottom: "2rem" }}>
        Per richieste, collaborazioni o pezzi su misura.
      </p>

      <p style={{ marginBottom: "0.5rem" }}>
        Email: <span style={{ fontFamily: "monospace" }}>info@tuodominio.it</span>
      </p>
      <p style={{ marginBottom: "0.5rem" }}>
        Instagram: <span style={{ fontFamily: "monospace" }}>@tuo_profilo</span>
      </p>
      <p style={{ color: "#777", marginTop: "2rem" }}>
        Nessun form complesso.  
        Una conversazione diretta, come tra persone.
      </p>
    </main>
  );
}