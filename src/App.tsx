import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;
