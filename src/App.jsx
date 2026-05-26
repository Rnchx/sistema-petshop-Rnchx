function App() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-[#f8f5ef] overflow-hidden">
      <section className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          <div className="space-y-8">
            <p className="text-[#c9a45c] text-sm tracking-[0.45em] uppercase">
              Sistema de Gestão Premium
            </p>

            <div>
              <h1 className="text-6xl md:text-8xl font-light tracking-tight">
                Smart<span className="text-[#c9a45c]">Pet</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
                Gestão inteligente para petshops de alto padrão. Controle clientes,
                pets, agendamentos, serviços e financeiro em uma plataforma elegante,
                moderna e responsiva.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-full bg-[#c9a45c] text-black font-semibold hover:bg-[#d8b86d] transition">
                Acessar sistema
              </button>

              <button className="px-8 py-4 rounded-full border border-[#c9a45c]/50 text-[#c9a45c] font-semibold hover:bg-[#c9a45c]/10 transition">
                Ver funcionalidades
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="text-3xl font-bold text-[#c9a45c]">+120</h3>
                <p className="mt-1 text-sm text-neutral-400">Pets cadastrados</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="text-3xl font-bold text-[#c9a45c]">98%</h3>
                <p className="mt-1 text-sm text-neutral-400">Organização</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="text-3xl font-bold text-[#c9a45c]">24h</h3>
                <p className="mt-1 text-sm text-neutral-400">Acesso online</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-[#c9a45c]/20 blur-[100px] rounded-full"></div>

            <div className="relative rounded-[2rem] border border-white/10 bg-[#171717]/95 shadow-2xl overflow-hidden">
              <div className="p-8 border-b border-white/10 flex items-center gap-5">
                <div className="w-20 h-20 rounded-3xl bg-[#c9a45c]/10 border border-[#c9a45c]/30 flex items-center justify-center text-4xl">
                  🐾
                </div>

                <div>
                  <h2 className="text-3xl font-semibold">
                    Smart<span className="text-[#c9a45c]">Pet</span>
                  </h2>
                  <p className="mt-1 text-neutral-400">
                    Dashboard premium
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <DashboardCard title="Agendamentos" value="18" subtitle="Hoje" />
                  <DashboardCard title="Clientes" value="86" subtitle="Ativos" />
                  <DashboardCard title="Serviços" value="12" subtitle="Disponíveis" />
                  <DashboardCard title="Faturamento" value="R$ 4,8k" subtitle="Mensal" />
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-lg font-semibold">Próximos atendimentos</h3>
                    <button className="text-sm text-[#c9a45c] hover:underline">
                      Ver todos
                    </button>
                  </div>

                  <div className="space-y-2">
                    <ScheduleItem pet="Thor" service="Banho premium" time="10:30" />
                    <ScheduleItem pet="Mel" service="Tosa higiênica" time="14:00" />
                    <ScheduleItem pet="Luna" service="Consulta veterinária" time="16:20" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}

function DashboardCard({ title, value, subtitle }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
      <p className="text-sm text-neutral-400">{title}</p>
      <h3 className="mt-1 text-3xl font-bold text-white">{value}</h3>
      <p className="mt-2 text-sm text-[#c9a45c]">{subtitle}</p>
    </div>
  )
}

function ScheduleItem({ pet, service, time }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white/[0.04] px-4 py-2.5">
      <div>
        <p className="font-semibold">{pet}</p>
        <p className="text-sm text-neutral-400">{service}</p>
      </div>

      <span className="text-sm font-medium text-[#c9a45c]">
        {time}
      </span>
    </div>
  )
}

export default App