import logo from "../assets/Images/LogoVBlackRemovebg.png";
import { FaUserTie, FaUser } from "react-icons/fa";

function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white relative overflow-hidden flex items-center justify-center">

      {/* Glow central suave */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_50%,#c9a45c0e,transparent)] pointer-events-none" />

      {/* Pata decorativa — canto superior esquerdo */}
      <div className="absolute top-8 left-8 text-[100px] opacity-[0.025] select-none pointer-events-none leading-none">
        🐾
      </div>

      {/* Pata decorativa — canto inferior direito */}
      <div className="absolute bottom-8 right-8 text-[100px] opacity-[0.025] select-none pointer-events-none leading-none">
        🐾
      </div>

      {/* Conteúdo principal */}
      <section className="relative z-10 w-full max-w-md mx-auto px-8 py-14 flex flex-col items-center text-center">

        {/* Logo */}
        <img
          src={logo}
          alt="SmartPet"
          className="w-48 sm:w-56 select-none drop-shadow-[0_0_18px_rgba(201,164,92,0.18)]"
          draggable={false}
        />

        {/* Tag de produto */}
        <p className="mt-5 uppercase tracking-[0.45em] text-[#c9a45c] text-[10px] font-semibold">
          Sistema Premium para Pet Shops
        </p>

        {/* Headline */}
        <h1 className="mt-3 text-[1.75rem] sm:text-[2rem] font-light leading-snug text-white">
          Gestão Inteligente.
          <br />
          <span className="text-[#c9a45c] font-normal">Cuidado Excepcional.</span>
        </h1>

        {/* Descrição */}
        <p className="mt-3 text-neutral-400 text-sm leading-6 max-w-[320px]">
          Organize clientes, pets, serviços, agendamentos e financeiro
          em uma única plataforma elegante e intuitiva.
        </p>

        {/* Divisor */}
        <div className="flex items-center gap-3 my-8 w-full max-w-[240px]">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#c9a45c]/40" />
          <span className="text-[#c9a45c] text-sm select-none">🐾</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#c9a45c]/40" />
        </div>

        {/* Label de acesso */}
        <p className="uppercase tracking-[0.4em] text-[#c9a45c]/60 text-[10px] font-medium mb-5">
          Escolha como deseja acessar
        </p>

        {/* Cards de acesso */}
        <div className="grid grid-cols-2 gap-3 w-full">
          <AccessCard
            icon={<FaUserTie />}
            title="Colaborador"
            description="Acesse o sistema interno."
          />
          <AccessCard
            icon={<FaUser />}
            title="Cliente"
            description="Acesse sua área exclusiva."
          />
        </div>

      </section>

    </main>
  );
}

function AccessCard({ icon, title, description }) {
  return (
    <button
      className="
        group
        flex flex-col items-center
        rounded-xl
        border border-[#c9a45c]/20
        bg-white/[0.03]
        px-4 py-5
        gap-2
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#c9a45c]/50
        hover:bg-[#c9a45c]/[0.06]
        hover:shadow-[0_4px_24px_rgba(201,164,92,0.12)]
        cursor-pointer
        w-full
      "
    >
      {/* Ícone */}
      <div className="text-xl text-[#c9a45c] transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      {/* Título */}
      <h3 className="text-sm font-semibold text-white tracking-wide">
        {title}
      </h3>

      {/* Descrição */}
      <p className="text-[11px] text-neutral-500 leading-4">
        {description}
      </p>
    </button>
  );
}

export default Home;
