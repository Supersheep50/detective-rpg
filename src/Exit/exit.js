import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Exit() {
  const [confirmed, setConfirmed] = useState(null);
  const navigate = useNavigate();

  if (confirmed === true) {
    return (
      <div className="text-light p-4">
        <h1>Goodbye!</h1>
      </div>
    );
  }

  if (confirmed === false) {

    navigate('/');
  }

  return (
    <div className="text-light p-4 text-center">
      <h1>Are you sure you want to exit?</h1>
      <div className="d-grid gap-3 mt-4">
        <button className="btn btn-outline-light" onClick={() => setConfirmed(true)}>Yes</button>
        <button className="btn btn-outline-light" onClick={() => setConfirmed(false)}>No</button>
      </div>
    </div>
  );
}

export default Exit;
