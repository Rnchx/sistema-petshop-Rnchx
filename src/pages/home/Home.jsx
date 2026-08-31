import logo from "../../assets/Images/LogoVBlackRemovebg.png";
import { FaArrowRight, FaRegGem, FaUser, FaUserTie } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home">
      {/* Iluminação suave */}
      <div className="home-light" />

      {/* Linha superior */}
      <div className="home-top-line" />

      {/* Elementos gráficos */}
      <div className="home-circle home-circle-left" />
      <div className="home-circle home-circle-right" />

      <section className="home-content">
        {/* Logo */}
        <img
          src={logo}
          alt="SmartPet"
          className="home-logo"
          draggable={false}
        />

        {/* Separador */}
        <div className="home-divider">
          <span />
          <FaRegGem aria-hidden="true" />
          <span />
        </div>

        {/* Texto */}
        <p className="home-subtitle">
          Escolha como deseja acessar
        </p>

        {/* Acessos */}
        <div className="access-buttons">
          <AccessButton
            icon={<FaUserTie />}
            title="Colaborador"
            onClick={() => navigate("/login/colaborador")}
          />

          <AccessButton
            icon={<FaUser />}
            title="Cliente"
            onClick={() => navigate("/login/cliente")}
          />
        </div>
      </section>
    </main>
  );
}

function AccessButton({ icon, title, onClick }) {
  return (
    <button
      type="button"
      className="access-button"
      onClick={onClick}
    >
      <span className="access-icon" aria-hidden="true">
        {icon}
      </span>

      <span className="access-title">
        {title}
      </span>

      <FaArrowRight
        className="access-arrow"
        aria-hidden="true"
      />
    </button>
  );
}

export default Home;