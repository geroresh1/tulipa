import "./globals.css";
import { Cormorant_Upright } from "next/font/google";

// FONT UFFICIALE: CORMORANT UPRIGHT
const tulipaFont = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"]
});

export const metadata = {
  title: "Tulipa",
  description: "Oggetti come architetture"
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={tulipaFont.className} style={{
        margin: 0,
        padding: 0,
        backgroundColor: "#fafafa",
        color: "#111",
        fontSize: "18px",
        lineHeight: "1.6"
      }}>

{/* HERO COMPLETO (menu + immagine + titolo centrato) */}
<div style={{
  position: "relative",
  width: "100%",
  height: "900px",
  overflow: "hidden",
  backgroundImage: `
    linear-gradient(to right, #fafafa 0%, transparent 20%, transparent 80%, #fafafa 100%),
    url('/immagini/sfondo-tulipa.png')
  `,
  backgroundSize: "cover",
  backgroundPosition: "center"
}}>

  {/* MENU — FONT RADDOPPIATO */}
  <header style={{
    padding: "2rem 4rem",
    display: "flex",
    gap: "3rem",
    fontSize: "2.2rem",   // raddoppiato
    zIndex: 2,
    position: "relative"
  }}>
    <a href="/" style={{ textDecoration: "none", color: "#111" }}>Home</a>
    <a href="/collezioni" style={{ textDecoration: "none", color: "#111" }}>Collezioni</a>
    <a href="/processo" style={{ textDecoration: "none", color: "#111" }}>Processo</a>
    <a href="/contatti" style={{ textDecoration: "none", color: "#111" }}>Contatti</a>
  </header>

  {/* TITOLO CENTRATO NELL'IMMAGINE — GRANDE IL DOPPIO */}
  <div style={{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 3,
    textAlign: "center"
  }}>
    <span style={{
      fontSize: "10rem",   // doppio rispetto a prima
      fontWeight: "400",
      letterSpacing: "0.03em",
      color: "#111"
    }}>
      Tulipa
    </span>
  </div>

</div>

        {/* CONTENUTO PAGINE */}
        <main>
          {children}
        </main>

      </body>
    </html>
  );
}