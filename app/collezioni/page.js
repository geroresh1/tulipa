export default function CollezioniPage() {
  return (
    <main style={{
      padding: "4rem",
      maxWidth: "900px",
      margin: "0 auto",
      lineHeight: "1.6"
    }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "300", marginBottom: "1rem" }}>
        Collezioni
      </h1>
      <p style={{ color: "#555", marginBottom: "2rem" }}>
        Oggetti pensati come piccole architetture.  
        Ogni collezione esplora una variazione di forma, peso, luce.
      </p>

      <section style={{ display: "grid", gap: "2rem" }}>
        <article style={{ border: "1px solid #eee", padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: "300" }}>Collezione 01 — Volume</h2>
          <p style={{ color: "#555" }}>
            Blocchi compatti, superfici nette, presenza fisica.  
            Oggetti che occupano spazio senza chiedere permesso.
          </p>
        </article>

        <article style={{ border: "1px solid #eee", padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: "300" }}>Collezione 02 — Traccia</h2>
          <p style={{ color: "#555" }}>
            Linee, incavi, segni.  
            Oggetti che sembrano ricordare qualcosa, ma non dicono cosa.
          </p>
        </article>
      </section>
    </main>
  );
}