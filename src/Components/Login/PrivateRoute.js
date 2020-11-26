import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { userContext } from "../../App";

function PrivateRoute({ children, ...rest }) {
  const [userLogged, setUserLogged] = useContext(userContext);
  console.log(userLogged.email);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userLogged.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
