import * as React from 'react';

interface IProp {
  float: 'right' | 'left';
  class: string;
}

export default class Floatdiv extends React.Component<IProp> {
  render() {
    const styles = {
      float: this.props.float,
      borderStyle: 'solid',
      borderWidth: (this.props.float === 'left')
        ? '0 1px 0 0'
        : '0 0 0 1px',
      borderColor: 'rgb(200,200,200)',
    };
    return (
      <div className={this.props.class} style={styles}>
        {this.props.children}
      </div>
    );
  }
}
