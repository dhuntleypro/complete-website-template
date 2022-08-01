import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

// Style
import './styles/HomeScreen/home.scss';
import './styles/HomeScreen/_mixins.scss';

import RoutesController from './Routes';
import Navbar from './components/Template1/DashboardScreen/Navbar/Navbar';

import './components/Template1/DashboardScreen/style.css';

import Container from './components/Template1/DashboardScreen/Container/Container';
import RightNavbar from './components/Template1/DashboardScreen/RightNavbar/RightNavbar';
import NavContext from './components/Template1/DashboardScreen/Context/NavContext';

function App() {
  const [nav, setNav] = useState(false);
  const value = { nav, setNav };

  return (
    <BrowserRouter>
      <main>
        {window.location.pathname.indexOf('/admin') ? (
          <RoutesController />
        ) : (
          <div className="App">
            <NavContext.Provider value={value}>
              <Navbar />
              <Container
                stickyNav={<RightNavbar />}
                content={<RoutesController />}
              />
            </NavContext.Provider>
          </div>
        )}
      </main>

      {/* <footer>
        <div className="text-center">All rights reserved</div>
      </footer> */}
    </BrowserRouter>
  );
}

export default App;