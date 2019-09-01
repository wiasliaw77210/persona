import * as React from 'react';

interface IProp {
  width?: string;
  height?: string;
}

export default class Wraper extends React.Component<IProp> {
  render() {
    const styles = {
      width: this.props.width,
      height: this.props.height,
    };
    return (
      <div className="wraper" style={styles}>
        {this.props.children}
      </div>
    );
  }
}
