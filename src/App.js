import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Intro from './Chapter 1/intro';
import SaveGame from "./Save Game/saveGame";
import About from "./About/about";
import Exit from "./Exit/exit";


function MenuScreen() {
  const navigate = useNavigate();

  return (
<div className="container d-flex flex-column align-items-center px-3">
<pre className="text-monospace bg-dark text-light p-4 rounded mb-5">
{String.raw`
  _____       _            _   _                  _               _____                      _       
 |  __ \     | |          | | (_)                | |             / ____|                    | |      
 | |  | | ___| |_ ___  ___| |_ ___   _____       | | ___   ___  | (___  _ __ ___   __ _ _ __| |_ ___ 
 | |  | |/ _ \ __/ _ \/ __| __| \ \ / / _ \  _   | |/ _ \ / _ \  \___ \| '_ \` _ \ / _\` | '__| __/ __|
 | |__| |  __/ ||  __/ (__| |_| |\ V /  __/ | |__| | (_) |  __/  ____) | | | | | | (_| | |  | |_\__ \\
 |_____/ \___|\__\___|\___|\__|_| \_/ \___|  \____/ \___/ \___| |_____/|_| |_| |_|\__,_|_|   \__|___/
`}
      </pre>

      <div className="border border-light rounded p-4 bg-secondary text-light" style={{ width: '100%', maxWidth: '400px' }}
      >
        <h4 className="text-center mb-4">Main Menu</h4>
        <div className="d-grid gap-3">
          <button className="btn btn-outline-light" onClick={() => navigate('/intro')}>New Game</button>
          <button className="btn btn-outline-light" onClick={() => navigate('/save')}>Save Game</button>
          <button className="btn btn-outline-light" onClick={() => navigate('/about')}>About</button>
          <button className="btn btn-outline-light" onClick={() => navigate('/exit')}>Exit Game</button>
        </div>
      </div>
    </div>

    
  );
}

function App() {
  return (

    
    <Router>
      <div className="bg-dark min-vh-100 d-flex justify-content-center align-items-center">
        <Routes>
          <Route path="/" element={<MenuScreen />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/save" element={<SaveGame />} />
          <Route path="/about" element={<About />} />
          <Route path="/exit" element={<Exit />} />


        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
