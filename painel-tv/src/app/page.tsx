import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        height: "100vh",
        background: "#3d3d3d",
        display: "flex",
        flexDirection: "column",
        border: "8px solid #444",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#b7d1ac",
          padding: "16px 0",
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: 600,
          letterSpacing: 1,
        }}
      >
        FilaZero
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex" }}>
        {/* Left Panel */}
        <div
          style={{
            background: "#7dc0c3",
            width: "28%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            padding: "32px 0",
          }}
        >
          <div style={{ fontSize: "2.2rem", fontWeight: 400, marginBottom: 24 }}>
            SENHA ATUAL
          </div>
          <div style={{ fontSize: "6rem", fontWeight: 600, letterSpacing: 6, marginBottom: 24 }}>
            A 001
          </div>
          <div style={{ fontSize: "2.2rem", fontWeight: 400, marginBottom: 0 }}>
            GUICHÊ
          </div>
          <div style={{ fontSize: "3rem", fontWeight: 400 }}>01</div>
        </div>
        {/* Right Panel (Anúncios) */}
        <div
          style={{
            flex: 1,
            background: "#0a170d",
            minHeight: 0,
            minWidth: 0,
          }}
        >
          {/* Espaço para anúncios */}
        </div>
      </div>

      {/* Últimas Chamadas */}
      <div
        style={{
          background: "#45796b",
          padding: "24px 0 16px 0",
          color: "#fff",
          fontSize: "2rem",
          fontWeight: 500,
          letterSpacing: 1,
        }}
      >
        <div style={{ marginLeft: 24, marginBottom: 16 }}>ÚLTIMAS CHAMADAS</div>
        <div style={{ display: "flex", gap: 24, justifyContent: "flex-start", marginLeft: 24 }}>
          {["P001 - GUICHE 03", "P001 - GUICHE 03", "P001 - GUICHE 03", "P001 - GUICHE 03", "P001 - GUICHE 03"].map(
            (item, idx) => (
              <div
                key={idx}
                style={{
                  background: "#7dc0c3",
                  color: "#fff",
                  borderRadius: 24,
                  padding: "10px 28px",
                  fontSize: "1.3rem",
                  fontWeight: 500,
                  boxShadow: "0 2px 8px #0002",
                  minWidth: 180,
                  textAlign: "center",
                }}
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}