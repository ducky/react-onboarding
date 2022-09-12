import { useState } from 'react';

//
// START HERE
// You can delete everything inside the App function and go to town.
// The header and all that is contained in Root.tsx which you can edit if you
// like at any point.
//
const App = () => {
  const [name, setName] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const renderContent = () => {
    if (!confirmed) {
      return (
        <form onSubmit={() => setConfirmed(true)} style={{ width: '30vw' }}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control form-control-lg text-center"
              id="name"
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              autoFocus
            />
          </div>
          <button className="btn btn-primary btn-lg mt-2" type="submit">
            Thats Me!
          </button>
        </form>
      );
    }

    return (
      <div>
        <h2>Hello, {name}!</h2>
        <p>Congrats, you just setup and interacted with a React app!</p>
        <p>
          View <code>README.md</code> for your next steps.
        </p>
      </div>
    );
  };

  return (
    <div className="d-flex justify-content-center pt-5 text-center">
      {renderContent()}
    </div>
  );
};

export { App };
