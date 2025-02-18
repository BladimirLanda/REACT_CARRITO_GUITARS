import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' //--TS npm install -D @types/css-modules: Integración CSS Modules en TypeScript 
import App from './App.tsx'

//--TS Assertion not null (!): Operador que indica que un valor no es Nulo  
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
