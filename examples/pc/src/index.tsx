import ReactDOM from 'react-dom/client';
import App from './App';
import '@fairys/valtio-form-basic/esm/styles/index.css';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<App />);
}
