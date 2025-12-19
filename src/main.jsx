/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 15/12/2025 - 10:44:55
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/12/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
