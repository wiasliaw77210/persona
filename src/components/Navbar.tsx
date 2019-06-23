import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component<{}, {}> {
  render() {
    return (
      <nav id="navbar">
        <div>
          <Link className="navbar-link" to="/">About</Link>
          <Link className="navbar-link" to="/snippets">Snippets</Link>
        </div>
        <div>
          <Link className="navbar-link" to="/contact">Contact</Link>
        </div>
      </nav>
    );
  }
}
