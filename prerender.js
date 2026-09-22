import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Novas páginas da landing entram aqui (ex.: '/precos', '/prescricao-dietetica')
const routes = ['/']

for (const route of routes) {
  const appHtml = render(route)

  if (!appHtml || appHtml.length < 500) {
    throw new Error(`Prerender de "${route}" gerou HTML vazio ou suspeito (${appHtml.length} chars)`)
  }

  const html = template.replace('<!--app-html-->', appHtml)

  if (html === template) {
    throw new Error('Placeholder <!--app-html--> nao encontrado em dist/client/index.html')
  }

  const filePath = route === '/' ? 'dist/client/index.html' : `dist/client${route}/index.html`
  fs.mkdirSync(path.dirname(toAbsolute(filePath)), { recursive: true })
  fs.writeFileSync(toAbsolute(filePath), html)
  console.log('pre-rendered:', filePath, `(${appHtml.length} chars)`)
}
