import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Snippet from './components/Snippet';
import Contact from './components/Contact';
import './static/scss/main.scss';

export default class App extends React.Component {
  render() {
    return (
      <main>
        <Router>
          <Navbar />
          <Route exact path="/" component={About} />
          <Route path="/snippets" component={Snippet} />
          <Route path="/contact" component={Contact} />
        </Router>
      </main>
    );
  }
}
