function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Meu Primeiro Projeto em Node.js do Curso.Dev</h1>
      <p>
        Bem-vindo ao meu primeiro projeto desenvolvido durante o curso da
        Curso.Dev!
      </p>
      <p>
        Confira mais sobre mim no meu{" "}
        <a
          href="https://www.linkedin.com/in/anderson-p-sales-/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0072b1", textDecoration: "none" }}
        >
          LinkedIn
        </a>{" "}
        ou veja outros projetos no meu{" "}
        <a
          href="https://github.com/SalllesAnd"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#333", textDecoration: "none" }}
        >
          GitHub
        </a>
        .
      </p>
      <p>🚀 Desenvolvido com Node.js e Next.js, e hospedado na Vercel.</p>
    </div>
  );
}

export default Home;
