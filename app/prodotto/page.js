export default function ProdottoPage() {
  return (
    <main style={{
      padding: "4rem",
      maxWidth: "900px",
      margin: "0 auto",
      lineHeight: "1.6"
    }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "300", marginBottom: "1rem" }}>
        Oggetto 01 — Volume
      </h1>
      <p style={{ color: "#555", marginBottom: "1.5rem" }}>
        Scultura funzionale in cera / materiale da definire.  
        Superficie compatta, presenza fisica, luce controllata.
      </p>

      <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
        € 180
      </p>

      <button
        style={{
          padding: "0.8rem 1.6rem",
          border: "1px solid #111",
          background: "#111",
          color: "#fafafa",
          cursor: "pointer",
          fontSize: "0.95rem",
          letterSpacing: "0.05em",
          textTransform: "uppercase"
        }}
      >
        Aggiungi al carrello
      </button>

      <section style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: "300", marginBottom: "0.5rem" }}>
          Dettagli
        </h2>
        <p style={{ color: "#555" }}>
          Ogni pezzo è realizzato singolarmente.  
          Piccole variazioni sono parte dell’opera, non difetti.
        </p>
      </section>
    </main>
  );
}