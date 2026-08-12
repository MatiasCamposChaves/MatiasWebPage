import "../entrypoints/application.css"
import { createInertiaApp } from "@inertiajs/react"
import { createRoot } from "react-dom/client"

createInertiaApp({
  page: JSON.parse(document.getElementById("app").dataset.page),
  resolve: (name) => {
    const pages = import.meta.glob("../pages/**/*.jsx", { eager: true })
    return pages[`../pages/${name}.jsx`]
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
  title: (title) => title ? `${title} | Matias Campos` : "Matias Campos",
})
