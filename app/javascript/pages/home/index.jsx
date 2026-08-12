const navItems = ["Sobre mi", "Proyectos", "Experiencia", "Contacto"]

export default function Home({ profile, highlights, sections }) {
  return (
    <main className="min-h-screen bg-[#f8faf9] text-[#172026]">
      <header className="border-b border-[#d8e0dc] bg-[#f8faf9]/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-lg font-semibold tracking-normal">
            {profile.name}
          </a>
          <nav className="hidden items-center gap-6 text-sm text-[#52605b] md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="transition hover:text-[#172026]">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-24">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#2f6f63]">
            {profile.location}
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-[#172026] md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-2xl font-medium text-[#2f3b37]">
            {profile.role}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#52605b]">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#proyectos" className="rounded-md bg-[#172026] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2f3b37]">
              Ver proyectos
            </a>
            <a href="#contacto" className="rounded-md border border-[#b8c6c0] px-5 py-3 text-sm font-semibold text-[#172026] transition hover:border-[#172026]">
              Contacto
            </a>
          </div>
        </div>

        <aside className="rounded-lg border border-[#d8e0dc] bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-[#2f6f63]">Enfoque</p>
          <ul className="mt-5 space-y-4">
            {highlights.map((highlight) => (
              <li key={highlight} className="border-l-2 border-[#79a99a] pl-4 text-base text-[#2f3b37]">
                {highlight}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="border-y border-[#d8e0dc] bg-white">
        <div className="mx-auto grid max-w-6xl gap-5 px-6 py-12 md:grid-cols-4">
          {sections.map((section) => (
            <article key={section.title} id={section.title.toLowerCase().replaceAll(" ", "-")} className="rounded-lg border border-[#d8e0dc] p-5">
              <h2 className="text-lg font-semibold text-[#172026]">{section.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#52605b]">{section.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
