import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
import { ProductComponent } from './components/ProductComponent.tsx'
import DialogBoxComponent from './components/DialogBoxComponent.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DialogBoxComponent />
    <ProductComponent />
    {/* <App /> */}
  </StrictMode>,
)
