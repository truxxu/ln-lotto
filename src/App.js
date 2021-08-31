import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./App.module.scss";
import { Footer, Navbar } from "./molecules";
import { Home, Faq, Tickets } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <main className="container-fluid">
        <Router>
          <Switch>
            <Route path="/tickets">
              <Tickets />
            </Route>
            <Route path="/faq">
              <Faq />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </main>
      <Footer />
    </>
  );
}

export default App;
