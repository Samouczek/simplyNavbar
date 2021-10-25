import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar"
import {useState} from "react";

function App() {
    const [logged, setLogged] = useState(false);

    const handleLoggedDone = (data) => {
        setLogged(data);
    }

  return (
    <>
      <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Navbar logged={logged} onDaneLogged={handleLoggedDone}/>
            </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
