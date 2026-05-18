import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// Intentionally NOT using StrictMode so render counts are accurate (1:1)
// StrictMode double-renders in dev which would confuse the demo metrics
createRoot(document.getElementById('root')!).render(<App />)
