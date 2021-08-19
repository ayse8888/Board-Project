import Home from "./components/Home"
import About from "./components/About"
import Favorite from "./components/Favorite"
import './App.css';

import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";


function App() {
  return (
<Router>
        <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/favorite" component={Favorite} />
              </Switch>
  </Router>
  );
}

export default App;
