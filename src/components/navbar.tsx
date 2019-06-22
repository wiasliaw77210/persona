import * as React from 'react';
import styledComponents from 'styled-components';

const FlexDiv = styledComponents.div`
  displayL flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export class Navbar extends React.Component {
  render() {
    return (
      <nav id="navbar">
        <div>
          <a className="navbar-link" href="">About</a>
          <a className="navbar-link" href="">Snippets</a>
        </div>
        <FlexDiv>
          <a className="navbar-link" href="">Contact</a>
        </FlexDiv>
      </nav>
    );
  }
}
