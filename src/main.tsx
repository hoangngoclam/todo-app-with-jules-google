import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

/**
 * The entry point of the application.
 *
 * This file is responsible for rendering the root `App` component into the DOM.
 * It uses `createRoot` from `react-dom/client` to enable Concurrent Mode in React.
 * The `StrictMode` component is used to highlight potential problems in an application.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
