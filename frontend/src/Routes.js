import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

// Home
import HomeScreen from './containers/Menu/HomeScreen';

// Menu
import CartScreen from './containers/Menu/CartScreen';
import SigninScreen from './containers/Menu/SigninScreen';
import SignupScreen from './containers/Menu/SignupScreen';
import ProfileScreen from './containers/Menu/ProfileScreen';
import PricingScreen from './containers/Menu/PricingScreen';
import StudioScreen from './containers/Menu/StudioScreen';
import AboutScreen from './containers/Menu/AboutScreen';
import SettingsScreen from './containers/Menu/SettingsScreen';

// Dashboard
import Dashboard from './components/Template1/DashboardScreen/Pages/Dashboard/Dashboard';
import Analytics from './components/Template1/DashboardScreen/Pages/Analytics/Analytics';
import Campaigns from './components/Template1/DashboardScreen/Pages/Campaigns/Campaigns';
import Team from './components/Template1/DashboardScreen/Pages/Team/Team';
import Services from './components/Template1/DashboardScreen/Pages/Services/Services';

// CRUD
import ProductListScreen from './containers/CRUD/Product/ProductListScreen';
import ProductEditScreen from './containers/CRUD/Product/ProductEditScreen';
import OrderListScreen from './containers/CRUD/Order/OrderListScreen';
import OrderHistoryScreen from './containers/CRUD/Order/OrderHistoryScreen';
import UserListScreen from './containers/CRUD/User/UserListScreen';
import UserEditScreen from './containers/CRUD/User/UserEditScreen';
import TeamListScreen from './containers/CRUD/Team/TeamListScreen';
import TeamEditScreen from './containers/CRUD/Team/TeamEditScreen';

import ProductScreen from './containers/CRUD/Product/ProductScreen';
import OrderScreen from './containers/CRUD/Order/OrderScreen';

import AdminRoute from './components/AdminRoute';
import ShippingAddressScreen from './containers/ShippingAddressScreen';
import PaymentMethodScreen from './containers/PaymentMethodScreen';
import PlaceOrderScreen from './containers/PlaceOrderScreen';
import SearchScreen from './containers/SearchScreen';
import ProtectedRoute from './components/ProtectedRoute';

// Style
import './styles/HomeScreen/home.scss';
import './styles/HomeScreen/_mixins.scss';

import ShopScreen from './containers/ShopScreen';

import Products from './components/Template1/DashboardScreen/Pages/Products/Products';
// import StoreScreen from './containers/StoreScreen';
import Home from './components/Template1/StoreScreen/pages/home';
import { AnimatePresence } from 'framer-motion';
import Model from './components/Template1/StoreScreen/pages/model';
import ContactUsScreen from './containers/Menu/ContactUsScreen';

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
        element={<HomeScreen />}
        // render={() => <Home imageDetails={imageDetails} />}
      />
      <Route
        render={({ location }) => (
          <AnimatePresence initial={false} exitBeforeEnter>
            {/* <Routes location={location} key={location.pathname}> */}
            <Route
              exact
              path="/"
              element={<Home imageDetails={imageDetails} />}
              // render={() => <Home imageDetails={imageDetails} />}
            />
            <Route
              exact
              path="/model/:id"
              render={() => <Model imageDetails={imageDetails} />}
            />
            {/* </Routes> */}
          </AnimatePresence>
        )}
      />
      {/* Dashboard Routes / Protected */}
      <Route path="*" element={<main>NOT FOUND</main>} />
      <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/analytics"
        element={
          <AdminRoute>
            <Analytics />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/campaigns"
        element={
          <AdminRoute>
            <Campaigns />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/services"
        element={<AdminRoute>{<Services />}</AdminRoute>}
      />
      <Route
        path="/admin/team"
        element={
          <AdminRoute>
            <Team />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/messages"
        element={
          <AdminRoute>
            <main>Messages</main>
          </AdminRoute>
        }
      />
      {/* <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <DashboardScreen />
          </AdminRoute>
        }
      ></Route> */}
      <Route
        path="/admin/orders"
        element={
          <AdminRoute>
            <OrderListScreen />
          </AdminRoute>
        }
      ></Route>
      <Route
        path="/admin/users"
        element={
          <AdminRoute>
            <UserListScreen />
          </AdminRoute>
        }
      ></Route>
      <Route
        path="/admin/products"
        element={
          <AdminRoute>
            {/* <ProductListScreen /> */}
            <Products />
          </AdminRoute>
        }
      ></Route>
      <Route
        path="/admin/product/:id"
        element={
          <AdminRoute>
            <ProductEditScreen />
          </AdminRoute>
        }
      ></Route>{' '}
      <Route
        path="/admin/service/:id"
        element={<AdminRoute>{/* <EditScreen /> */}</AdminRoute>}
      ></Route>{' '}
      <Route
        path="/admin/team/:id"
        element={
          <AdminRoute>
            <TeamEditScreen />
          </AdminRoute>
        }
      ></Route>
      <Route
        path="/admin/campaign/:id"
        element={
          <AdminRoute>
            <ProductEditScreen />
          </AdminRoute>
        }
      ></Route>
      <Route
        path="/admin/user/:id"
        element={
          <AdminRoute>
            <UserEditScreen />
          </AdminRoute>
        }
      ></Route>
      {/* Customer Routes */}
      <Route path="/settings" element={<SettingsScreen />} />
      <Route path="/pricing" element={<PricingScreen />} />
      <Route path="/shop" element={<ShopScreen />} />
      <Route path="/studio" element={<StudioScreen />} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/contact-us" element={<ContactUsScreen />} />
      <Route path="/product/:slug" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/search" element={<SearchScreen />} />
      <Route path="/signin" element={<SigninScreen />} />
      <Route path="/signup" element={<SignupScreen />} />
      <Route path="/placeorder" element={<PlaceOrderScreen />} />
      {/* <Route
      path="/map"
      element={
        <ProtectedRoute>
          <MapScreen />
        </ProtectedRoute>
      }
    /> */}
      <Route
        path="/order/:id"
        element={
          <ProtectedRoute>
            <OrderScreen />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/orderhistory"
        element={
          <ProtectedRoute>
            <OrderHistoryScreen />
          </ProtectedRoute>
        }
      ></Route>
      <Route path="/shipping" element={<ShippingAddressScreen />}></Route>
      <Route path="/payment" element={<PaymentMethodScreen />}></Route>
      {/* Admin Routes */}
    </Routes>
  );
}

export default RoutesController;