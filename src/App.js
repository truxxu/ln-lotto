import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./App.module.scss";

function App() {
  return (
    <div className="container-fluid">
      <main>
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
    </div>
  );
}

export default App;
