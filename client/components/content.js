import React from 'react'
import {NavbarInstance} from './nav'
import {FormInstance} from './form'
import {Results} from './results'
import {Recent} from './recent'
var axios = require('axios')
var recent


export class Content extends React.Component {
  constructor(props) {
    super();
    this.showResults = this.showResults.bind(this)
    this.showRecent = this.showRecent.bind(this)
    this.updateFormResults = this.updateFormResults.bind(this)
    this.state = {
      output: 'Results',
      recent: 'search state woowoo',
      searchResults: 'this is what was searched',
      searchTerm: null,
      searchPage: null
    }
  }

  showResults (e) {
    e.preventDefault()
    this.setState({
      output: 'Results'
    })
  }

  updateFormResults (searchTerm, searchPage) {
   // e.preventDefault()
    this.setState({
      searchTerm: searchTerm,
      searchPage: searchPage
    })
  }

  showRecent (e) {
    e.preventDefault()
// Axios request to update state //
    axios.get('http://localhost:3002/api/recent')
    .then(res =>{
      console.log(res)
      this.setState({
        recent: res,
        output: 'Recent'
      })
    })
  }

  render() {


    if(this.state.output == 'Results'){
      return (
        <div className="contentBox">
          <FormInstance updateFormResults = {this.updateFormResults} showResults = {this.showResults} />
          <NavbarInstance showRecent = {this.showRecent} showResults = {this.showResults} />
          <Results searchResults={this.state.searchResults}/>
        </div>
      )
    } else {
      return (
        <div className="contentBox">
          <FormInstance updateFormResults = {this.updateFormResults} showResults = {this.showResults}/>
          <NavbarInstance showRecent = {this.showRecent} showResults = {this.showResults} />
          <Recent recent={this.state.recent}/>
        </div>
      )
    }
  }
}
