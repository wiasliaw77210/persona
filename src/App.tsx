import * as React from 'react';
import 'normalize.css';
import { Hello } from './components/hello';
import './static/main.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="www">
        <Hello name="WWW" />
      </div>
    );
  }
}
