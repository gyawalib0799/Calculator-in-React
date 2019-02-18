import React, { Component } from 'react';



class Output extends Component {
  render() {
    let {final} = this.props;
        return (
            <div className="Screen">
                <p>{final}</p>
            </div>
    );
  }
}

export default Output;
