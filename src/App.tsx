import * as React from 'react';
import { Navbar } from './components/navbar';
import './static/scss/main.scss';

export default class App extends React.Component {
  render() {
    return (
      <main className="container">
        <Navbar />
      </main>
    );
  }
}
