import './index.css'
import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'

const container = document.getElementById('root')!

const app = (
  <StrictMode>
    <App url={window.location.pathname} />
  </StrictMode>
)

// Em produção o HTML já vem pré-renderizado pelo prerender.js, então hidratamos.
// Em `npm run dev` o container tem apenas o comentário <!--app-html-->, sem elementos,
// então criamos a root normalmente e o dev server continua funcionando igual.
if (container.firstElementChild) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
