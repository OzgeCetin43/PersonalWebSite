import React, {Fragment} from "react";
import GlobalStyles from "./Styles/GlobalStyles";
import { Switch, Route  } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import EducationExperience from "./pages/EducationExperience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

const App = (props) => {
  return (
    <Fragment>
      <GlobalStyles/>
      <Switch>
        <Route exact strict path="/" component={Home}/>
        <Route exact strict path="/about" component={About}/>
        <Route exact strict path="/educationexperience" component={EducationExperience}/>
        <Route exact strict path="/projects" component={Projects}/>
        <Route exact strict path="/contact" component={Contact}/>
      </Switch>
    </Fragment>
  );
}

export default App;