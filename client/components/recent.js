import React from 'react'

export class Recent extends React.Component {
  render() {
    return (
      <div className="results">
        <h1>These are recent searches</h1>
        <div>
          <ul>
            {/*JSON.stringify({this.props.recent})*/}
            {this.props.recent.data.map((recentSearch) => <li>{recentSearch.searchVal}</li>)}
          </ul>
        </div>
      </div>
    )
  }
}
