import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

// Home
import Home from './components/Template2/pages/Home';
import Services from './components/Template2/pages/Services';
import Products from './components/Template2/pages/Products';
import SignUp from './components/Template2/pages/SignUp';

function RoutesController() {
  const imageDetails = {
    width: 524,
    height: 650,
  };

  return (
    <Routes>
      {/* <Route path="/" element={<StoreScreen />} /> */}
      <Route
        exact
        path="/"
        element={<Home />}
        // render={() => <Home imageDetails={imageDetails} />}
      />
      <Route/>
    
    
      <Route
        exact
        path="/services"
        element={<Services />}
        // render={() => <Home imageDetails={imageDetails} />}
      />
      <Route/>

<Route
        exact
        path="/products"
        element={<Products />}
        // render={() => <Home imageDetails={imageDetails} />}
      />
      <Route/>

      <Route
        exact
        path="/signUp"
        element={<SignUp />}
        // render={() => <Home imageDetails={imageDetails} />}
      />
      <Route/>



      {/* Admin Routes */}
    </Routes>
  );
}

export default RoutesController;