import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="bg-dark text-light min-vh-100 p-4">
      <div className="container mb-5">
        <pre className="text-monospace bg-dark text-light p-4 rounded">
{String.raw`
  _____       _            _   _                  _               _____                      _       
 |  __ \     | |          | | (_)                | |             / ____|                    | |      
 | |  | | ___| |_ ___  ___| |_ ___   _____       | | ___   ___  | (___  _ __ ___   __ _ _ __| |_ ___ 
 | |  | |/ _ \ __/ _ \/ __| __| \ \ / / _ \  _   | |/ _ \ / _ \  \___ \| '_ \` _ \ / _\` | '__| __/ __|
 | |__| |  __/ ||  __/ (__| |_| |\ V /  __/ | |__| | (_) |  __/  ____) | | | | | | (_| | |  | |_\__ \\
 |_____/ \___|\__\___|\___|\__|_| \_/ \___|  \____/ \___/ \___| |_____/|_| |_| |_|\__,_|_|   \__|___/
`}
        </pre>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <div className="border border-light rounded p-4 bg-secondary text-light" style={{ minWidth: '250px' }}>
          <h4 className="text-center mb-4">Main Menu</h4>
          <div className="d-grid gap-3">
            <button className="btn btn-outline-light">New Game</button>
            <button className="btn btn-outline-light">Save Game</button>
            <button className="btn btn-outline-light">About</button>
            <button className="btn btn-outline-light">Exit Game</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
