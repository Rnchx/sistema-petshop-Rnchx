import logo from "../assets/icons/Icon.png";
import { FaUserTie, FaUser } from "react-icons/fa";

function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white relative overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#c9a45c15,transparent_65%)]"></div>

      {/* Patas decorativas */}
      <div className="absolute top-16 left-16 text-[180px] opacity-[0.03]">
        🐾
      </div>

      <div className="absolute bottom-16 right-16 text-[180px] opacity-[0.03]">
        🐾
      </div>

      <section className="relative flex min-h-screen items-center justify-center px-6">

        <div className="max-w-5xl w-full flex flex-col items-center text-center">

          <img
            src={logo}
            alt="SmartPet"
            className="w-80 md:w-[420px] select-none"
          />

          <p className="mt-8 uppercase tracking-[0.45em] text-[#c9a45c] text-sm">
            Sistema Premium para Pet Shops
          </p>

          <h2 className="mt-8 text-4xl md:text-5xl font-light leading-tight">
            Gestão Inteligente.
            <br />
            Cuidado Excepcional.
          </h2>

          <p className="mt-8 max-w-3xl text-neutral-400 text-lg leading-8">
            Organize clientes, pets, serviços, agendamentos e financeiro
            em uma única plataforma moderna, elegante e intuitiva.
          </p>

          {/* divisor */}

          <div className="flex items-center gap-5 my-14">

            <div className="w-28 h-px bg-[#c9a45c]/50"></div>

            <span className="text-[#c9a45c] text-xl">
              🐾
            </span>

            <div className="w-28 h-px bg-[#c9a45c]/50"></div>

          </div>

          <p className="uppercase tracking-[0.35em] text-[#c9a45c] text-sm mb-8">
            Escolha como deseja acessar
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">

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
      rounded-3xl
      border
      border-[#c9a45c]/20
      bg-white/[0.03]
      backdrop-blur-sm
      p-10
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-[#c9a45c]
      hover:shadow-[0_0_40px_rgba(201,164,92,0.20)]
      "
    >

      <div className="text-5xl text-[#c9a45c] mb-8 flex justify-center group-hover:scale-110 transition">
        {icon}
      </div>

      <h3 className="text-3xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-neutral-400">
        {description}
      </p>

    </button>
  );
}

export default Home;