import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Home } from './views/Home'
import { Task } from './views/Task'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Task />
  </React.StrictMode>,
)
