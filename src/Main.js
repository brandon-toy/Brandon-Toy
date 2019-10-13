import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './pages/about/About';
import Resume from './pages/resume/Resume';
import Projects from './pages/projects/Projects';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/projects" component={Projects} />
    </Switch>
  </main>
);

export default Main;
