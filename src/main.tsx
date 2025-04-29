import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./store";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// store sería una caja donde guardamos el estado de la aplicación
// con el Provider le pasamos a la App el store
// y así la App puede acceder a los datos del store
