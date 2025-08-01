import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import NetflixIndex from './Components/Netflix/netflix-index';
import { Project1 } from './Components/Project-1/Pr1';
import { ThrottleDemo } from './Components/throttledemo/throttledemo';import{ StopWatch } from './Components/Stopwatch/stopwatch';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StopWatch/>
  </StrictMode>,
)
