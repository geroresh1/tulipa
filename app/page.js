export default function Home() {
  return (
    <main style={{
      fontFamily: "sans-serif",
      padding: "4rem",
      maxWidth: "900px",
      margin: "0 auto",
      lineHeight: "1.6"
    }}>
      
      <section style={{ marginBottom: "4rem" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "300", marginBottom: "1rem" }}>
          Oggetti che nascono da un’idea
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Dal pensiero alla forma. Dalla forma alla materia.  
          Creo oggetti che non raccontano una storia: la incarnano.
        </p>
      </section>

      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "300", marginBottom: "1rem" }}>
          Collezioni
        </h2>
        <p style={{ color: "#555" }}>
          Una selezione di pezzi realizzati con cura, uno alla volta.  
          Ogni oggetto è una scultura funzionale.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "2rem", fontWeight: "300", marginBottom: "1rem" }}>
          Processo
        </h2>
        <p style={{ color: "#555" }}>
          Il processo è parte dell’opera.  
          L’idea prende forma attraverso gesti, materiali, errori, intuizioni.  
          Ogni pezzo è il risultato di un percorso, non di una produzione.
        </p>
      </section>

    </main>
  );
}