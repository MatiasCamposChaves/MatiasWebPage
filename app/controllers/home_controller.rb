class HomeController < ApplicationController
  def index
    render inertia: "home/index", props: {
      profile: {
        name: "Matias Campos Chaves",
        short_name: "Matias Campos",
        role: "Full Stack Software Engineer",
        location: "Desamparados, San Jose, Costa Rica",
        email: "matiastrabajo974@gmail.com",
        phone: "+506 8703 5523",
        cv_url: "matias-campos-cv.pdf",
        cv_preview_url: "matias-campos-cv-preview.png",
        linkedin: "https://www.linkedin.com/in/matias-campos-a5b160274/",
        github: "https://github.com/MatiasCamposChaves"
      },
      skills: [
        "React",
        "Java",
        "JavaScript",
        "Python",
        "HTML",
        "CSS",
        "MySQL",
        "SQL Server",
        "C++",
        "C#",
        "AI-assisted development"
      ],
      soft_skills: [
        "Problem resolution",
        "Public speaking",
        "Multitasking",
        "Creativity",
        "Team management"
      ],
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "Advanced (B2)" },
        { name: "German", level: "Basic" }
      ],
      credentials: [
        {
          title: "Bachillerato en Ingeniería del Software",
          issuer: "Universidad CENFOTEC",
          date: "25-03-2026",
          url: "https://acreditta.com/credential/af7caa63-f7ba-41a4-a0a9-aec49c2776e5?utm_source=copy&resource_type=badge&resource=af7caa63-f7ba-41a4-a0a9-aec49c2776e5",
          kind: "Degree"
        },
        {
          title: "Mención Honor Académico >=90",
          issuer: "Universidad CENFOTEC",
          date: "25-03-2026",
          url: "https://acreditta.com/credential/e16aef2c-747d-45e4-9945-098d6d327447?utm_source=copy&resource_type=badge&resource=e16aef2c-747d-45e4-9945-098d6d327447",
          kind: "Academic honor"
        }
      ],
      education: [
        {
          title: "Baccalaureate in Software Engineering",
          institution: "Universidad CENFOTEC",
          period: "2022 - 2025"
        },
        {
          title: "Information and Communications Technology Operator",
          institution: "INA / National Learning Institute",
          period: "2020"
        },
        {
          title: "Scrum Fundamentals",
          institution: "Scrum Study",
          period: "2023"
        }
      ]
    }
  end
end
