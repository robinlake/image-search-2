import React from 'react'

export class Recent extends React.Component {
  render() {
    return (
      <div className="results">
        <h1>These are recent searches</h1>
        <div>
          <ul>
            {this.props.recent}
          </ul>
        </div>
      </div>
    )
  }
}
