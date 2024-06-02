import React from "react";
import { AuthProvider } from "../src/context/AuthContext";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-odansrc5jr6xjemv.us.auth0.com"
    clientId="5W9m8oxIlYyKSQkrVDyQWkabtQW5rJ5k"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <AuthProvider>
      <App />
    </AuthProvider>
  </Auth0Provider>
);

reportWebVitals();
