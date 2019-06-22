import * as React from 'react';

export class Navbar extends React.Component<{}, {}> {
  render() {
    return (
      <nav id="navbar">
        <div>
          <a className="navbar-link" href="">About</a>
          <a className="navbar-link" href="">Snippets</a>
        </div>
        <div>
          <a className="navbar-link" href="">Contact</a>
        </div>
      </nav>
    );
  }
}
