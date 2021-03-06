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
import Apps from "./pages/Apps";
import AppDetails from "./pages/AppDetails";
import AppList from "./data/apps/appList.json";
import About from "./pages/About";
import EboutMe from "./pages/EboutMe";
import Footer from './components/Footer';
import CovidImg from "./data/apps/covid-19-icon.png";
import NotFound from "./pages/NotFound";
import IsaacColney from "./pages/IsaacColney";

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
            <About />
          </Route>
          <Route path='/e-boutMe' exact >
            <EboutMe />
          </Route>
          <Route path="/apps/covid-19" exact>
            <AppDetails
              title={AppList["app"][0].title}
              description={AppList["app"][0].description}
              downloadLink={AppList["app"][0].downloadLink}
              img={CovidImg}
              images={AppList["app"][0].images}
            />
          </Route>
          <Route path="/404_Not_Found" exact>
            <NotFound />
          </Route>
          <Route path="/isaac_colney" exact>
            <IsaacColney/>
          </Route>
          <Route path='/404_not_found' exact>
            <NotFound/>
          </Route>
          <Redirect to="/404_Not_Found" />
        </Switch>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
