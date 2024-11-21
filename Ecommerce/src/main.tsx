import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './route.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider
      router={router}
      future={{ v7_startTransition: true }}
    />

  </StrictMode>,
)