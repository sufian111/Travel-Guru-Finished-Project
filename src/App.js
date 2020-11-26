import "./App.css";
import NavbarSection from "./Components/NavbarSection/NavbarSection";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import BookingForm from "./Components/BookingForm/BookingForm";
import logo from "./Image/Logo2.png";
import Login from "./Components/Login/Login";
import { createContext, useState } from "react";
import SignUp from "./Components/SignUp/SignUp";
import Location from "./Components/Location/Location";
import PrivateRoute from "./Components/Login/PrivateRoute";

// set and get user login context api
export const userContext = createContext();

function App() {
  // state set and get user login
  const [userLogged, setUserLogged] = useState({ email: "", name: "" });

  return (
    <>
      <Router>
        <Switch>
          {/* signup message provider value  */}
          <userContext.Provider value={[userLogged, setUserLogged]}>
            <Route exact path="/">
              <div className="App">
                <NavbarSection />
                <Home />
              </div>
            </Route>

            <Route exact path="/booking-form/:id">
              <div className="App">
                <NavbarSection />
                <BookingForm></BookingForm>
              </div>
            </Route>

            <Route path="/login">
              <div className="App2">
                <NavbarSection logo={logo} color="default" />
                <Login></Login>
              </div>
            </Route>

            <Route path="/signup">
              <div className="App2">
                <NavbarSection logo={logo} color="default" />
                <SignUp></SignUp>
              </div>
            </Route>

            <PrivateRoute path="/location/:id">
              <div className="App2">
                <NavbarSection logo={logo} color="default" />
                <Location></Location>
              </div>
            </PrivateRoute>
          </userContext.Provider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
