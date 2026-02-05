import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
import { ProductComponent } from './components/ProductComponent.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductComponent />
    {/* <App /> */}
  </StrictMode>,
)
