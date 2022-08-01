import React from 'react';

//Pages
import HomeOne from '../../components/Template1/AboutScreen/homeOne';

//Styles
// import './style.scss';
import '../../components/Template1/AboutScreen/style.scss';

export default function AboutScreen() {
  // const navigate = useNavigate();
  // const { state, dispatch: ctxDispatch } = useContext(Store);
  // const {
  //   cart: { cartItems },
  // } = state;
  // const imageDetails = {
  //   width: 524,
  //   height: 650,
  // };

  return (
    <>
      <HomeOne />
    </>

    // <Router>
    //   <Header />
    //   <Route
    //     render={({ location }) => (
    //       <AnimatePresence initial={false} exitBeforeEnter>
    //         <Route location={location} key={location.pathname}>
    //           <Route
    //             exact
    //             // path="/About"
    //             render={() => <Home imageDetails={imageDetails} />}
    //           />
    //           {/* <Route
    //             exact
    //             // path="/model/:id"
    //             path="/model/:id"
    //             render={() => <Model imageDetails={imageDetails} />}
    //           /> */}
    //         </Route>
    //       </AnimatePresence>
    //     )}
    //   />
    //  </Router>
  );
}
