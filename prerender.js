import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const SITE = 'https://www.bodygraph.com.br'

const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8')
const { render, routes } = await import('./dist/server/entry-server.js')

const pages = routes

const escapeAttr = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function replaceOrThrow(html, regex, replacement, label, route) {
  if (!regex.test(html)) {
    throw new Error(`Rota "${route}": nao encontrei ${label} no template`)
  }
  return html.replace(regex, replacement)
}

function applyHead(html, page) {
  const canonical = page.path === '/' ? `${SITE}/` : `${SITE}${page.path}`
  const t = escapeAttr(page.title)
  const d = escapeAttr(page.description)

  html = replaceOrThrow(html, /<title>[\s\S]*?<\/title>/, `<title>${t}</title>`, '<title>', page.path)
  html = replaceOrThrow(html, /(<meta name="description" content=")[^"]*(")/, `$1${d}$2`, 'meta description', page.path)
  html = replaceOrThrow(html, /(<link rel="canonical" href=")[^"]*(")/, `$1${canonical}$2`, 'canonical', page.path)
  html = replaceOrThrow(html, /(<meta property="og:url" content=")[^"]*(")/, `$1${canonical}$2`, 'og:url', page.path)
  html = replaceOrThrow(html, /(<meta property="og:title" content=")[^"]*(")/, `$1${t}$2`, 'og:title', page.path)
  html = replaceOrThrow(html, /(<meta property="og:description" content=")[^"]*(")/, `$1${d}$2`, 'og:description', page.path)
  html = replaceOrThrow(html, /(<meta name="twitter:title" content=")[^"]*(")/, `$1${t}$2`, 'twitter:title', page.path)
  html = replaceOrThrow(html, /(<meta name="twitter:description" content=")[^"]*(")/, `$1${d}$2`, 'twitter:description', page.path)

  // O @graph completo (Organization, WebSite, SoftwareApplication, WebPage, FAQPage)
  // descreve a home. Em rotas internas ele seria falso, entao e substituido por um
  // bloco minimo que referencia a mesma Organization.
  if (page.path !== '/') {
    const minimal = `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "${canonical}#webpage",
          "url": "${canonical}",
          "name": ${JSON.stringify(page.title)},
          "description": ${JSON.stringify(page.description)},
          "isPartOf": { "@id": "${SITE}/#website" },
          "publisher": { "@id": "${SITE}/#organization" },
          "inLanguage": "pt-BR"
        }
      ]
    }
    </script>`
    html = replaceOrThrow(
      html,
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      minimal,
      'bloco JSON-LD',
      page.path
    )
  }

  return html
}

for (const page of pages) {
  const appHtml = render(page.path)

  if (!appHtml || appHtml.length < 500) {
    throw new Error(`Prerender de "${page.path}" gerou HTML vazio ou suspeito (${appHtml.length} chars)`)
  }

  let html = template.replace('<!--app-html-->', appHtml)
  if (html === template) {
    throw new Error('Placeholder <!--app-html--> nao encontrado em dist/client/index.html')
  }

  html = applyHead(html, page)

  const filePath =
    page.path === '/' ? 'dist/client/index.html' : `dist/client${page.path}/index.html`
  fs.mkdirSync(path.dirname(toAbsolute(filePath)), { recursive: true })
  fs.writeFileSync(toAbsolute(filePath), html)
  console.log('pre-rendered:', filePath, `(${appHtml.length} chars)`)
}
