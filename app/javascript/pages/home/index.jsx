import { useEffect, useMemo, useState } from "react"

const content = {
  es: {
    modalTitle: "Bienvenido al perfil tecnológico de Matias Campos",
    modalText: "Elige el idioma para entrar a una presentación profesional creada para reclutadores, empresas y equipos de tecnología.",
    spanish: "Español",
    english: "Inglés",
    enter: "Ingresar",
    lang: "Idioma",
    nav: [
      ["perfil", "Perfil"],
      ["datos", "Datos"],
      ["experiencia", "Experiencia"],
      ["acreditaciones", "Acreditaciones"],
      ["cv", "CV"],
      ["contacto", "Contacto"],
    ],
    eyebrow: "Full Stack Software Engineer",
    headline: "Desarrollo software con enfoque practico, criterio tecnico y hambre de crecer.",
    summary: "Soy ingeniero de software y desarrollador Full Stack en Grupo Montecristo, trabajando en soluciones para DrMax con backend, frontend y bases de datos usando C#, CSS y MySQL. También tengo conocimiento en desarrollo con IA y experiencia académica con React, Java, JavaScript, HTML/CSS, C++, C# y bases de datos.",
    primary: "Ver CV",
    secondary: "Contactarme",
    proofTitle: "Razones para contratarme",
    proof: [
      "Experiencia laboral actual desarrollando software para DrMax.",
      "Formación universitaria en Ingeniería del Software.",
      "Conocimiento en desarrollo con IA para acelerar análisis, prototipado y construcción de soluciones.",
      "Inglés avanzado B2 y comunicación clara para equipos técnicos.",
    ],
    aboutTitle: "Sobre mí",
    about: "Me gusta construir soluciones que se entiendan, funcionen bien y puedan mantenerse. Combino base técnica, curiosidad, conocimiento en herramientas de IA y capacidad de aprender rápido para aportar en frontend, backend y bases de datos.",
    personalTitle: "Datos personales",
    personalText: "Información directa para empresas, reclutadores o equipos que quieran conocer mi perfil.",
    email: "Correo",
    phone: "Telefono",
    location: "Ubicación",
    stackTitle: "Stack tecnico",
    strengthsTitle: "Fortalezas",
    languagesTitle: "Idiomas",
    experienceTitle: "Experiencia",
    experienceLead: "Experiencia real creando software",
    experiences: [
      {
        role: "Desarrollador Full Stack",
        company: "Grupo Montecristo / DrMax",
        period: "Julio 2026 - Actualidad",
        body: "Participo en el desarrollo y mantenimiento de software para el sector de DrMax como Full Stack, trabajando en backend, frontend y bases de datos. Utilizo C#, CSS y MySQL para apoyar soluciones internas, ajustar interfaces, trabajar con información de la base de datos y contribuir a mejoras que hagan los procesos más claros, estables y fáciles de usar para el equipo.",
      },
      {
        role: "FullStack Dev at University",
        company: "Universidad CENFOTEC",
        period: "Septiembre 2022 - Diciembre 2025",
        body: "Durante mi formación desarrollé sitios web con React, desde diseño básico hasta implementación. También elaboré servicios backend con Java, C++ y C#, entendiendo cómo distintas herramientas interactúan con bases de datos y arquitecturas de software.",
      },
    ],
    educationTitle: "Certificaciones y educación",
    credentialsTitle: "Acreditaciones verificables",
    credentialsText: "Credenciales digitales emitidas por Universidad CENFOTEC y verificables en Acreditta.",
    verify: "Verificar",
    issued: "Emitido por",
    date: "Reconocimiento",
    cvTitle: "CV profesional",
    cvText: "Consulta o descarga mi CV completo con experiencia, habilidades, educación, idiomas y enlaces profesionales.",
    cvPreviewTitle: "Resumen del CV",
    cvPreviewItems: ["Full Stack Software Engineer", "Experiencia actual en DrMax", "React, C#, JavaScript, MySQL e IA"],
    openCv: "Abrir CV",
    downloadCv: "Descargar PDF",
    contactTitle: "Links y contacto",
    contactText: "Si mi perfil encaja con lo que estás construyendo, estos son los canales más directos para revisar mi trabajo o escribirme.",
    open: "Abrir",
  },
  en: {
    modalTitle: "Welcome to Matias Campos' technology profile",
    modalText: "Choose a language to enter a professional profile built for recruiters, companies, and technology teams.",
    spanish: "Spanish",
    english: "English",
    enter: "Enter",
    lang: "Language",
    nav: [
      ["profile", "Profile"],
      ["personal", "Personal"],
      ["experience", "Experience"],
      ["credentials", "Credentials"],
      ["resume", "Resume"],
      ["contact", "Contact"],
    ],
    eyebrow: "Full Stack Software Engineer",
    headline: "I develop software with practical focus, technical judgment, and hunger to grow.",
    summary: "I am a software engineer and Full Stack developer at Grupo Montecristo, working on solutions for DrMax across backend, frontend, and databases using C#, CSS, and MySQL. I also have knowledge in AI-assisted development and academic experience with React, Java, JavaScript, HTML/CSS, C++, C#, and databases.",
    primary: "View resume",
    secondary: "Contact me",
    proofTitle: "Reasons to hire me",
    proof: [
      "Current work experience developing software for DrMax.",
      "University background in Software Engineering.",
      "Knowledge in AI-assisted development to accelerate analysis, prototyping, and solution building.",
      "Advanced B2 English and clear communication for technical teams.",
    ],
    aboutTitle: "About me",
    about: "I enjoy building solutions that are clear, useful, and maintainable. I combine technical foundations, curiosity, knowledge in AI tools, and fast learning to contribute across frontend, backend, and databases.",
    personalTitle: "Personal information",
    personalText: "Direct information for companies, recruiters, or teams who want to understand my profile.",
    email: "Email",
    phone: "Phone",
    location: "Location",
    stackTitle: "Technical stack",
    strengthsTitle: "Strengths",
    languagesTitle: "Languages",
    experienceTitle: "Experience",
    experienceLead: "Real experience building software",
    experiences: [
      {
        role: "Full Stack Developer",
        company: "Grupo Montecristo / DrMax",
        period: "July 2026 - Current",
        body: "I participate in the development and maintenance of software for the DrMax sector as a Full Stack developer, working across backend, frontend, and databases. I use C#, CSS, and MySQL to support internal solutions, adjust interfaces, work with database information, and contribute improvements that make processes clearer, more stable, and easier for the team to use.",
      },
      {
        role: "FullStack Dev at University",
        company: "Universidad CENFOTEC",
        period: "September 2022 - December 2025",
        body: "During my studies, I developed websites with React, from basic design to implementation. I also built backend services with Java, C++, and C#, understanding how different tools interact with databases and software architectures.",
      },
    ],
    educationTitle: "Certifications and education",
    credentialsTitle: "Verified credentials",
    credentialsText: "Digital credentials issued by Universidad CENFOTEC and verifiable through Acreditta.",
    verify: "Verify",
    issued: "Issued by",
    date: "Recognition",
    cvTitle: "Professional resume",
    cvText: "View or download my complete resume with experience, skills, education, languages, and professional links.",
    cvPreviewTitle: "Resume snapshot",
    cvPreviewItems: ["Full Stack Software Engineer", "Current experience at DrMax", "React, C#, JavaScript, MySQL, and AI"],
    openCv: "Open resume",
    downloadCv: "Download PDF",
    contactTitle: "Links and contact",
    contactText: "If my profile fits what you are building, these are the most direct channels to review my work or reach me.",
    open: "Open",
  },
}

const softSkillLabels = {
  "Problem resolution": { es: "Resolución de problemas", en: "Problem resolution" },
  "Public speaking": { es: "Comunicación en público", en: "Public speaking" },
  Multitasking: { es: "Multitarea", en: "Multitasking" },
  Creativity: { es: "Creatividad", en: "Creativity" },
  "Team management": { es: "Gestión de equipos", en: "Team management" },
}

const educationLabels = {
  "Baccalaureate in Software Engineering": { es: "Bachillerato en Ingeniería del Software", en: "Baccalaureate in Software Engineering" },
  "Information and Communications Technology Operator": { es: "Operador de Tecnologías de Información y Comunicación", en: "Information and Communications Technology Operator" },
  "Scrum Fundamentals": { es: "Scrum Fundamentals", en: "Scrum Fundamentals" },
}

const languageLabels = {
  Spanish: { es: "Español", en: "Spanish" },
  English: { es: "Inglés", en: "English" },
  German: { es: "Alemán", en: "German" },
  Native: { es: "Nativo", en: "Native" },
  "Advanced (B2)": { es: "Avanzado (B2)", en: "Advanced (B2)" },
  Basic: { es: "Básico", en: "Basic" },
}

export default function Home({ profile, skills, soft_skills, languages, credentials, education }) {
  const [language, setLanguage] = useState("es")
  const [showModal, setShowModal] = useState(true)
  const t = content[language]

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-language")
    if (saved === "es" || saved === "en") {
      setLanguage(saved)
      setShowModal(false)
    }
  }, [])

  const initials = useMemo(() => profile.name.split(" ").slice(0, 2).map((word) => word[0]).join(""), [profile.name])

  function enterSite() {
    window.localStorage.setItem("portfolio-language", language)
    setShowModal(false)
  }

  return (
    <main className="min-h-screen bg-[#f6f8f7] text-[#14201d]">
      {showModal && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[#07110f]/80 px-5 backdrop-blur-md">
          <section className="w-full max-w-lg rounded-lg border border-white/15 bg-[#f6f8f7] p-6 shadow-2xl md:p-8">
            <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-[#14201d] text-xl font-bold text-white">
              MC
            </div>
            <h1 className="text-center text-3xl font-semibold leading-tight">{t.modalTitle}</h1>
            <p className="mt-4 text-center leading-7 text-[#53625d]">{t.modalText}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                ["es", t.spanish],
                ["en", t.english],
              ].map(([value, label]) => (
                <label key={value} className={`flex cursor-pointer items-center gap-3 rounded-md border p-4 transition ${language === value ? "border-[#1f6f61] bg-[#e6f2ef]" : "border-[#cfd9d4] bg-white hover:border-[#7fa99e]"}`}>
                  <input type="checkbox" checked={language === value} onChange={() => setLanguage(value)} className="h-5 w-5 accent-[#1f6f61]" />
                  <span className="font-semibold">{label}</span>
                </label>
              ))}
            </div>
            <button type="button" onClick={enterSite} className="mt-6 w-full rounded-md bg-[#14201d] px-5 py-3 font-semibold text-white transition hover:bg-[#26433c]">
              {t.enter}
            </button>
          </section>
        </div>
      )}

      <header className="sticky top-0 z-40 border-b border-[#d7e0dc] bg-[#f6f8f7]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-3 font-semibold">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-[#14201d] text-sm text-white">{initials}</span>
            <span>{profile.short_name}</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-[#53625d] lg:flex">
            {t.nav.map(([href, label]) => (
              <a key={href} href={`#${href}`} className="transition hover:text-[#14201d]">{label}</a>
            ))}
          </nav>
          <button type="button" onClick={() => setShowModal(true)} className="rounded-md border border-[#c6d2cc] px-3 py-2 text-sm font-semibold transition hover:border-[#14201d]">
            {t.lang}: {language.toUpperCase()}
          </button>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden border-b border-[#d7e0dc]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(31,111,97,0.18),transparent_34%),linear-gradient(135deg,#f6f8f7_0%,#eef4f1_46%,#f9fbfa_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#1f6f61]">{t.eyebrow}</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">{t.headline}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#53625d]">{t.summary}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={profile.cv_url} target="_blank" rel="noreferrer" className="inline-flex min-w-24 items-center justify-center rounded-md bg-[#1f6f61] px-5 py-3 text-sm font-semibold text-[#ffffff] shadow-sm transition hover:bg-[#18584d]">{t.primary}</a>
              <a href={`mailto:${profile.email}`} className="inline-flex min-w-28 items-center justify-center rounded-md border border-[#8fa49b] bg-white px-5 py-3 text-sm font-semibold text-[#14201d] shadow-sm transition hover:border-[#1f6f61] hover:text-[#1f6f61]">{t.secondary}</a>
            </div>
          </div>
          <aside className="rounded-lg border border-[#d7e0dc] bg-white/82 p-6 shadow-sm backdrop-blur md:p-8">
            <div className="flex items-center gap-5">
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-lg bg-[#14201d] text-2xl font-bold text-white">MC</div>
              <div>
                <h2 className="text-2xl font-semibold">{profile.name}</h2>
                <p className="mt-1 text-[#53625d]">{profile.location}</p>
              </div>
            </div>
            <div className="mt-7 border-t border-[#d7e0dc] pt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1f6f61]">{t.proofTitle}</p>
              <ul className="mt-5 space-y-4">
                {t.proof.map((item) => (
                  <li key={item} className="flex gap-3 text-[#35443f]">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1f6f61]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section id={language === "es" ? "perfil" : "profile"} className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f6f61]">{t.aboutTitle}</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">{profile.name}</h2>
        </div>
        <p className="text-lg leading-8 text-[#53625d]">{t.about}</p>
      </section>

      <section id={language === "es" ? "datos" : "personal"} className="border-y border-[#d7e0dc] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f6f61]">{t.personalTitle}</p>
            <p className="mt-3 text-lg leading-8 text-[#53625d]">{t.personalText}</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <InfoBlock label={t.email} value={profile.email} href={`mailto:${profile.email}`} />
            <InfoBlock label={t.phone} value={profile.phone} href={`tel:${profile.phone.replaceAll(" ", "")}`} />
            <InfoBlock label={t.location} value={profile.location} />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-14 md:px-8 lg:grid-cols-3">
        <Panel title={t.stackTitle}><TagList items={skills} /></Panel>
        <Panel title={t.strengthsTitle}><TagList items={soft_skills.map((item) => softSkillLabels[item]?.[language] || item)} /></Panel>
        <Panel title={t.languagesTitle}>
          <div className="space-y-3">
            {languages.map((item) => (
              <div key={item.name} className="flex items-center justify-between border-b border-[#e1e8e5] pb-3 last:border-b-0 last:pb-0">
                <span className="font-semibold">{languageLabels[item.name]?.[language] || item.name}</span>
                <span className="text-sm text-[#53625d]">{languageLabels[item.level]?.[language] || item.level}</span>
              </div>
            ))}
          </div>
        </Panel>
      </section>

      <section id={language === "es" ? "experiencia" : "experience"} className="border-y border-[#d7e0dc] bg-[#14201d] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:px-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8fd7c7]">{t.experienceTitle}</p>
            <h2 className="mt-3 text-3xl font-semibold">{t.experienceLead}</h2>
          </div>
          <div className="space-y-5">
            {t.experiences.map((item) => (
              <article key={`${item.role}-${item.company}`} className="rounded-lg border border-white/15 bg-white/6 p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">{item.role}</h3>
                    <p className="mt-2 text-[#b9c9c4]">{item.company}</p>
                  </div>
                  <p className="rounded-md bg-[#8fd7c7]/12 px-3 py-2 text-sm font-semibold text-[#8fd7c7]">{item.period}</p>
                </div>
                <p className="mt-5 text-lg leading-8 text-[#dce7e3]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f6f61]">{t.educationTitle}</p>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {education.map((item) => (
            <article key={item.title} className="rounded-lg border border-[#d7e0dc] bg-white p-6">
              <p className="text-lg font-semibold">{educationLabels[item.title]?.[language] || item.title}</p>
              <p className="mt-3 text-[#53625d]">{item.institution}</p>
              <p className="mt-4 text-sm font-semibold text-[#1f6f61]">{item.period}</p>
            </article>
          ))}
        </div>
      </section>

      <section id={language === "es" ? "acreditaciones" : "credentials"} className="border-y border-[#d7e0dc] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f6f61]">{t.credentialsTitle}</p>
            <p className="mt-3 text-lg leading-8 text-[#53625d]">{t.credentialsText}</p>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {credentials.map((credential) => (
              <article key={credential.url} className="rounded-lg border border-[#d7e0dc] bg-[#f8faf9] p-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1f6f61]">{credential.kind}</p>
                    <h3 className="mt-3 text-2xl font-semibold">{credential.title}</h3>
                  </div>
                  <a href={credential.url} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center rounded-md bg-[#1f6f61] px-4 py-2 text-sm font-semibold text-[#ffffff] shadow-sm transition hover:bg-[#18584d]">{t.verify}</a>
                </div>
                <dl className="mt-6 grid gap-4 border-t border-[#d7e0dc] pt-5 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm text-[#53625d]">{t.issued}</dt>
                    <dd className="mt-1 font-semibold">{credential.issuer}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-[#53625d]">{t.date}</dt>
                    <dd className="mt-1 font-semibold">{credential.date}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id={language === "es" ? "cv" : "resume"} className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:px-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f6f61]">{t.cvTitle}</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">{profile.role}</h2>
          <p className="mt-4 text-lg leading-8 text-[#53625d]">{t.cvText}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={profile.cv_url} target="_blank" rel="noreferrer" className="inline-flex min-w-28 items-center justify-center rounded-md bg-[#1f6f61] px-5 py-3 text-sm font-semibold text-[#ffffff] shadow-sm transition hover:bg-[#18584d]">{t.openCv}</a>
            <a href={profile.cv_url} download className="inline-flex min-w-32 items-center justify-center rounded-md border border-[#8fa49b] bg-white px-5 py-3 text-sm font-semibold text-[#14201d] shadow-sm transition hover:border-[#1f6f61] hover:text-[#1f6f61]">{t.downloadCv}</a>
          </div>
        </div>
        <div className="rounded-lg border border-[#d7e0dc] bg-white p-5 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[0.88fr_1.12fr] md:items-center">
            <a href={profile.cv_url} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-lg border border-[#d7e0dc] bg-[#eef4f1] p-4 transition hover:border-[#1f6f61]">
              <img src={profile.cv_preview_url} alt="Matias Campos CV preview" className="mx-auto aspect-[8.5/11] w-full max-w-[260px] rounded-md border border-[#c6d2cc] bg-white object-cover object-top shadow-md transition group-hover:scale-[1.015]" />
            </a>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f6f61]">{t.cvPreviewTitle}</p>
              <ul className="mt-5 space-y-3">
                {t.cvPreviewItems.map((item) => (
                  <li key={item} className="flex gap-3 text-[#35443f]">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1f6f61]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-md bg-[#f6f8f7] p-4 text-sm leading-6 text-[#53625d]">
                {language === "es" ? "El PDF completo se abre en una pestaña separada para una lectura limpia, sin cargar el visor dentro de la página." : "The full PDF opens in a separate tab for a clean reading experience, without loading the browser viewer inside the page."}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id={language === "es" ? "contacto" : "contact"} className="bg-[#e7efeb]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f6f61]">{t.contactTitle}</p>
              <p className="mt-4 text-lg leading-8 text-[#53625d]">{t.contactText}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <SocialLink label="LinkedIn" href={profile.linkedin} action={t.open} />
              <SocialLink label="GitHub" href={profile.github} action={t.open} />
              <SocialLink label={t.email} href={`mailto:${profile.email}`} action={t.open} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function InfoBlock({ label, value, href }) {
  const content = (
    <>
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1f6f61]">{label}</p>
      <p className="mt-3 break-words text-lg font-semibold">{value}</p>
    </>
  )

  if (href) {
    return <a href={href} className="rounded-lg border border-[#d7e0dc] bg-[#f8faf9] p-5 transition hover:border-[#14201d]">{content}</a>
  }

  return <div className="rounded-lg border border-[#d7e0dc] bg-[#f8faf9] p-5">{content}</div>
}

function Panel({ title, children }) {
  return (
    <article className="rounded-lg border border-[#d7e0dc] bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-5">{children}</div>
    </article>
  )
}

function TagList({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="rounded-md border border-[#c6d2cc] bg-[#f8faf9] px-3 py-2 text-sm font-semibold text-[#35443f]">{item}</span>
      ))}
    </div>
  )
}

function SocialLink({ label, href, action }) {
  const isExternal = href.startsWith("http")

  return (
    <a href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined} className="group rounded-lg border border-[#c2d0ca] bg-white p-5 transition hover:border-[#14201d] hover:bg-[#14201d]">
      <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1f6f61] group-hover:text-[#8fd7c7]">{label}</span>
      <p className="mt-4 font-semibold group-hover:text-white">{action}</p>
    </a>
  )
}
