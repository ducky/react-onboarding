import moserLogo from './assets/logo-moser.png';
import { App } from './components/App';

const Root: React.FC = () => (
  <div className="page">
    <header className="navbar">
      <div className="container-xl">
        <div className="navbar-brand navbar-brand-autodark">
          <img className="navbar-logo" src={moserLogo} alt="Moser Consulting" />
        </div>
        <div className="navbar-nav text-end">
          <h1 className="mb-0">Intern Onboarding</h1>
          <h3 className="text-muted mb-0">First React App</h3>
        </div>
      </div>
    </header>

    <div className="page-wrapper p-4">
      <App />
    </div>
  </div>
);

export { Root };
