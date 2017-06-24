import React from 'react'

export class Instructions extends React.Component {
  render() {
    return (
      <div className="results">
        <h1>API Instructions</h1>
        <div>
          <p>In order to perform a search, add your search term and desired page number to
            the URL in the manner shown below.
          </p>
          <h2>Example:</h2>
          <p>https://img-data.herokuapp.com/api/search/google?offset=2</p>
          <p>In order to view recent searches, add /api/recent to the root URL</p>
          <h2>Example:</h2>
          <p>https://img-data.herokuapp.com/api/recent</p>
        </div>
      </div>
    )
  }
}
