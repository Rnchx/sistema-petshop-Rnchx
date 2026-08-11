import logo from "../assets/Images/LogoVBlackRemovebg.png";
import { FaArrowRight, FaRegGem, FaUser, FaUserTie } from "react-icons/fa";

function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0d0d0d] text-white">
      {/* Iluminação suave para valorizar o centro da composição */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_38%_at_50%_44%,#c9a45c12,transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a45c]/20 to-transparent" />

      {/* Elementos gráficos discretos */}
      <div className="pointer-events-none absolute left-8 top-8 h-24 w-24 rounded-full border border-[#c9a45c]/[0.035]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-40 w-40 rounded-full border border-[#c9a45c]/[0.025]" />

      <section className="relative z-10 flex w-full max-w-sm flex-col items-center px-7 py-16 text-center sm:max-w-md">
        {/* Logo */}
        <img
          src={logo}
          alt="SmartPet"
          className="w-64 select-none drop-shadow-[0_0_24px_rgba(201,164,92,0.18)] sm:w-72"
          draggable={false}
        />

        {/* Separador de acesso */}
        <div className="mt-8 flex w-full max-w-[220px] items-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c9a45c]/35" />
          <FaRegGem className="text-[11px] text-[#c9a45c]/80" aria-hidden="true" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c9a45c]/35" />
        </div>

        <p className="mt-4 font-display text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#d6bc82]">
          Escolha como deseja acessar
        </p>

        {/* Acessos */}
        <div className="mt-5 grid w-full grid-cols-2 gap-2.5">
          <AccessButton icon={<FaUserTie />} title="Colaborador" />
          <AccessButton icon={<FaUser />} title="Cliente" />
        </div>
      </section>
    </main>
  );
}

function AccessButton({ icon, title }) {
  return (
    <button
      type="button"
      className="group flex min-h-14 items-center justify-center gap-2.5 rounded-lg border border-[#c9a45c]/20 bg-white/[0.025] px-3 py-3 text-xs font-semibold tracking-[0.02em] text-neutral-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c9a45c]/55 hover:bg-[#c9a45c]/[0.055] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a45c]"
    >
      <span className="text-[0.72rem] text-[#c9a45c] transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
        {icon}
      </span>
      <span>{title}</span>
      <FaArrowRight className="text-[0.55rem] text-[#c9a45c]/0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#c9a45c]/80" aria-hidden="true" />
    </button>
  );
}

export default Home;
