import React from 'react'

export class Results extends React.Component {
  render() {
    if(typeof this.props.searchResults == 'object'){
      return (
        <div className="results">
          <h1>Showing Search Results</h1>
          <div>
              {this.props.searchResults.data.map((searchResults) => 
              <ul>
              <li>{searchResults.context}</li>
              <li>{searchResults.snippet}</li>
              <li>{searchResults.thumbnail}</li>
              <li>{searchResults.url}</li>
              </ul>)}
          </div>
        </div>
      )
    } else {
      return (
          <div className="results">
            <h1>No Search Performed</h1>
            <div>
              <ul>
              </ul>
            </div>
          </div>
      )
    }
  }
}
