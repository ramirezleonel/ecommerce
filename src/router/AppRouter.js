import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import home from "../pages/home";

const AppRouter = () => {
  return (
    <Router>
      {/* <Context.Provider value={{ }}> */}
      <Routes>
        <Route exact path="/home" component={home} />
    
      </Routes>

      {/* </Context.Provider> */}
    </Router>
  );
};

export default AppRouter;
