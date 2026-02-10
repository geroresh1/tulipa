export default function ProcessoPage() {
  return (
    <main style={{
      padding: "4rem",
      maxWidth: "900px",
      margin: "0 auto",
      lineHeight: "1.6"
    }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "300", marginBottom: "1rem" }}>
        Processo
      </h1>
      <p style={{ color: "#555", marginBottom: "2rem" }}>
        Il processo non è un dietro le quinte: è parte dell’opera.  
        Ogni oggetto nasce da una sequenza di decisioni, errori, correzioni, intuizioni.
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: "300" }}>1. Idea</h2>
        <p style={{ color: "#555" }}>
          Un’intuizione, una forma mentale, una tensione.  
          Non un concept da spiegare, ma una direzione da seguire.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: "300" }}>2. Forma</h2>
        <p style={{ color: "#555" }}>
          Il disegno, il modello, il volume.  
          La forma viene testata nello spazio, non solo sulla carta.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "1.6rem", fontWeight: "300" }}>3. Materia</h2>
        <p style={{ color: "#555" }}>
          La materia reagisce, resiste, si impone.  
          L’oggetto finale è un compromesso tra intenzione e realtà.
        </p>
      </section>
    </main>
  );
}