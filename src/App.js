import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Navbar} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
