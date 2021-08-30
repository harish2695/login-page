import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Dashboard/Home";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/header" component={Header} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
