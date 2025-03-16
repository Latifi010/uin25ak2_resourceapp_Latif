import { StrictMode } from 'react' // Importerer StrictMode fra react
import { createRoot } from 'react-dom/client' // Importerer createRoot fra react-dom/client
import { BrowserRouter } from 'react-router-dom'; // Importerer BrowserRouter fra react-router-dom
import App from './App.jsx' // Importerer App-komponenten fra App.jsx

createRoot(document.getElementById('root')).render( // Lager en rot-node og rendrer App-komponenten i rot-noden, dette er en nyere måte å rendere komponenter på. (ifl YT)
  <StrictMode>
    <BrowserRouter> {/* Prøver å wrapppe opp app, test 1 */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);
