// import '../components/DashboardScreen/style.css';
// import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from '../components/DashboardScreen/Navbar/Navbar';
// import Container from '../components/DashboardScreen/Container/Container';
// import RightNavbar from '../components/DashboardScreen/RightNavbar/RightNavbar';
// import Dashboard from '../components/DashboardScreen/Dashboard/Dashboard';
// import Analytics from '../components/DashboardScreen/Analytics/Analytics';
// import Campaigns from '../components/DashboardScreen/Campaigns/Campaigns';
// import Team from '../components/DashboardScreen/Team/Team';

// import NavContext from '../components/DashboardScreen/Context/NavContext';
// function App() {
//   const [nav, setNav] = useState(false);
//   const value = { nav, setNav };

//   return (
//     <div className="App">
//       <NavContext.Provider value={value}>
//         <Navbar />
//         <Container
//           stickyNav={<RightNavbar />}
//           content={
//             <Routes>
//               <Route path="*" element={<main>NOT FOUND</main>} />
//               <Route path="/admin/dashboard" element={<Dashboard />} />
//               <Route path="/analytics" element={<Analytics />} />
//               <Route path="/campaigns" element={<Campaigns />} />
//               <Route path="/team" element={<Team />} />
//               <Route path="/messages" element={<main>Messages</main>} />
//             </Routes>
//           }
//         />
//       </NavContext.Provider>
//     </div>
//   );
// }

// export default App;
