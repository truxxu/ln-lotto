import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./App.module.scss";
import { Footer, Navbar } from "./molecules";

function App() {
  return (
    <>
      <Navbar />
      <main className="container-fluid">
        <Router>
          <Switch>
            <Route path="/tickets">
              <p>Tickets purchase page</p>
            </Route>
            <Route path="/">
              <p>Welcome page</p>
            </Route>
          </Switch>
        </Router>
      </main>
      <Footer />
    </>
  );
}

export default App;
