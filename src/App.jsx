import * as React from "react";
import PublicRoute from "./router/PublicRoute";

//Redux
import { store } from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <PublicRoute />
    </Provider>
  );
}
