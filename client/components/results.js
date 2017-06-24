import React from 'react'

export class Results extends React.Component {
  render() {
    // if(typeof this.props.searchResults == 'object'){
      if(1 ==1){
      return (
        <div className="results">
          <h1>Showing Search Results</h1>
          <div>
              {this.props.searchResults.data.map((Results) => 
              <ul>
              <li>{Results.context}</li>
              {/*<li>{Results.snippet}</li>
              <li>{Results.thumbnail}</li>
              <li>{Results.url}</li>*/}
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
