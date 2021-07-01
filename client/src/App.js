import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';
import 'materialize-css';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import {Navbar} from "./components/Navbar";
import {Loader} from "./components/Loader";
import {Footer} from "./components/Footer";

function App() {

  const { login, userId, token, logout, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  if (!ready) {
      return <Loader/>
  }

  return (
    <AuthContext.Provider value={{ token, login, userId, logout, isAuthenticated }}>
        <Router>
            { isAuthenticated && <Navbar/> }
            <div className="container" style={{minHeight: '800px' }}>
                { routes }
            </div>
          <Footer/>
        </Router>
    </AuthContext.Provider>
  );
}

export default App;
