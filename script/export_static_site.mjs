import { execFileSync } from "node:child_process"
import { copyFileSync, cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const dist = join(root, "dist")
const manifestPath = join(root, "public", "vite", ".vite", "manifest.json")

function run(command, args) {
  execFileSync(command, args, {
    cwd: root,
    stdio: "inherit",
    shell: process.platform === "win32",
  })
}

function executable(command) {
  return process.platform === "win32" ? `${command}.cmd` : command
}

function readPageJson() {
  const runner = [
    "session = ActionDispatch::Integration::Session.new(Rails.application)",
    "session.host! 'localhost'",
    "session.get '/'",
    "puts session.response.body[/data-page=\\\"([^\\\"]+)/, 1]",
  ].join("; ")

  const runnerPath = join(root, "tmp", "export_static_page.rb")
  mkdirSync(dirname(runnerPath), { recursive: true })
  writeFileSync(runnerPath, runner)

  const output = execFileSync("ruby", ["bin/rails", "runner", runnerPath], {
    cwd: root,
    encoding: "utf8",
  })

  return output
    .split(/\r?\n/)
    .find((line) => line.trim().startsWith("{&quot;"))
    .replaceAll("&quot;", '"')
    .replaceAll("&amp;", "&")
    .replaceAll("&gt;", ">")
    .replaceAll("&lt;", "<")
    .trim()
}

run(executable("npm"), ["run", "build"])

rmSync(dist, { recursive: true, force: true })
mkdirSync(dist, { recursive: true })

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"))
const inertiaEntry = manifest["entrypoints/inertia.jsx"]
const cssFile = inertiaEntry.css[0]
const jsFile = inertiaEntry.file
const pageJson = readPageJson()

cpSync(join(root, "public", "vite", "assets"), join(dist, "assets"), { recursive: true })
copyFileSync(join(root, "public", "matias-campos-cv.pdf"), join(dist, "matias-campos-cv.pdf"))
copyFileSync(join(root, "public", "matias-campos-cv-preview.png"), join(dist, "matias-campos-cv-preview.png"))
copyFileSync(join(root, "public", "icon.png"), join(dist, "icon.png"))
copyFileSync(join(root, "public", "icon.svg"), join(dist, "icon.svg"))

const html = `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Matias Campos</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="description" content="Professional technology profile and portfolio for Matias Campos Chaves.">
    <link rel="icon" href="icon.svg?v=mc2" type="image/svg+xml">
    <link rel="icon" href="icon.png?v=mc2" type="image/png">
    <link rel="shortcut icon" href="icon.png?v=mc2" type="image/png">
    <link rel="apple-touch-icon" href="icon.png?v=mc2">
    <link rel="stylesheet" href="${cssFile}">
    <script src="${jsFile}" type="module"></script>
  </head>
  <body>
    <div id="app" data-page='${pageJson.replaceAll("'", "&#39;")}'></div>
  </body>
</html>
`

writeFileSync(join(dist, "index.html"), html)
writeFileSync(join(dist, "404.html"), html)
writeFileSync(join(dist, ".nojekyll"), "")

console.log(`Static site exported to ${dist}`)
