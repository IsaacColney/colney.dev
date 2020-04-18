import React from "react";
import "./App.scss";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Apps from './pages/Apps'
import AppDetails from "./pages/AppDetails";
import AppData from './data/apps/covid-19.json'
import About from "./pages/About";

function App() {
  return (
    <Router>
      <NavigationBar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/apps" exact>
            <Apps />
          </Route>
          <Route path="/about" exact>
            <About/>
          </Route>
          <Route path="/apps/covid-19" exact>
            <AppDetails title={AppData.title} description={AppData.description} downloadLink={AppData.downloadLink} />
          </Route>
         
          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
