class HomeController < ApplicationController
  def index
    render inertia: "home/index", props: {
      profile: {
        name: "Matias Campos",
        role: "Software Developer",
        location: "Guatemala",
        summary: "Portafolio profesional en construccion para presentar experiencia, proyectos y formas de contacto."
      },
      highlights: [
        "Desarrollo web moderno",
        "Productos digitales con enfoque practico",
        "Aprendizaje rapido y pensamiento creativo"
      ],
      sections: [
        { title: "Sobre mi", description: "Un espacio para contar quien soy, como trabajo y que tipo de problemas me gusta resolver." },
        { title: "Proyectos", description: "Casos destacados con tecnologias, decisiones tecnicas y resultados." },
        { title: "Experiencia", description: "Trayectoria, habilidades, educacion y herramientas principales." },
        { title: "Contacto", description: "Datos para que reclutadores o empresas puedan escribirme facilmente." }
      ]
    }
  end
end
