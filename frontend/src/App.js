import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

// Style
import './styles/HomeScreen/home.scss';
import './styles/HomeScreen/_mixins.scss';

// Nav Bar
// import Navbar from './components/Template1/DashboardScreen/Navbar/Navbar';
import Navbar from './components/Template2/Navbar';

// Routes
// import RoutesController from './Routes';
import RoutesControllerTemplate2 from './Routes-template2';


// Template 1 - remove ?

// import './components/Template1/DashboardScreen/style.css';
// import Container from './components/Template1/DashboardScreen/Container/Container';
// import RightNavbar from './components/Template1/DashboardScreen/RightNavbar/RightNavbar';
// import NavContext from './components/Template1/DashboardScreen/Context/NavContext';




function App() {
  const [nav, setNav] = useState(false);
  const value = { nav, setNav };

  return (
    <BrowserRouter>
      <main>
        {window.location.pathname.indexOf('/admin') ? (
          // <RoutesController />
          <RoutesControllerTemplate2 />
        ) : (

          // // Side Bar + Content 
          // <div className="App">
          //   <NavContext.Provider value={value}>
          //     <Navbar />
          //     <Container
          //       stickyNav={<RightNavbar />}
          //       content={<RoutesController />}
          //     />
          //   </NavContext.Provider>
          // </div>

          // Content Only
          //  <RoutesController />
          <div>
          <Navbar />
          <RoutesControllerTemplate2 />

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