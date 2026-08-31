import { useNavigate, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaLock,
  FaRegGem,
  FaUser,
} from "react-icons/fa";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const { tipo } = useParams();

  const isColaborador = tipo === "colaborador";

  const titulo = isColaborador
    ? "Acesso do Colaborador"
    : "Acesso do Cliente";

  const descricao = isColaborador
    ? "Entre para acessar o sistema"
    : "Entre para acessar sua conta";

  return (
    <main className="login">
      {/* Iluminação */}
      <div className="login-light" />

      {/* Linha superior */}
      <div className="login-top-line" />

      {/* Elementos decorativos */}
      <div className="login-circle login-circle-left" />
      <div className="login-circle login-circle-right" />

      <section className="login-container">
        {/* Voltar */}
        <button
          type="button"
          className="login-back"
          onClick={() => navigate("/")}
        >
          <FaArrowLeft />
          <span>Voltar</span>
        </button>

        {/* Cabeçalho */}
        <div className="login-header">
          <div className="login-icon">
            {isColaborador ? <FaUser /> : <FaUser />}
          </div>

          <h1>{titulo}</h1>

          <p>{descricao}</p>
        </div>

        {/* Separador */}
        <div className="login-divider">
          <span />
          <FaRegGem aria-hidden="true" />
          <span />
        </div>

        {/* Formulário */}
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">
              E-mail
            </label>

            <div className="input-container">
              <FaUser />

              <input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                autoComplete="email"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Senha
            </label>

            <div className="input-container">
              <FaLock />

              <input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                autoComplete="current-password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="login-button"
          >
            Entrar
          </button>
        </form>

        {/* Recuperação */}
        <button
          type="button"
          className="forgot-password"
        >
          Esqueci minha senha
        </button>
      </section>
    </main>
  );
}

export default Login;