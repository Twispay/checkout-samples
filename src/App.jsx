import { Suspense, lazy } from "solid-js";
import { Route, Router } from "@solidjs/router";
import Layout from "./components/Layout";
import Checkout from "./pages/Checkout/Checkout";
import CheckoutLight from "./pages/CheckoutLight/CheckoutLight";
import CheckoutDark from "./pages/CheckoutDark/CheckoutDark";
import TransactionResult from "./pages/TransactionResult/TransactionResult";

const routes = [
  { path: "/", component: Checkout },
  { path: "/v-light", component: CheckoutLight },
  { path: "/v-dark", component: CheckoutDark },
  { path: "/transaction-result", component: TransactionResult },
];

export const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router>
        <Route path="/" component={Layout}>
          {routes.map(({ path, component }) => (
            <Route path={path} component={component} />
          ))}
        </Route>
      </Router>
    </Suspense>
  );
};

export default App;
