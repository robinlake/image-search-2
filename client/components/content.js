import React from 'react'
import {NavbarInstance} from './nav'
import {FormInstance} from './form'
import {Results} from './results'
import {Recent} from './recent'
import {Instructions} from './instructions'
var axios = require('axios')
var recent


export class Content extends React.Component {
  constructor(props) {
    super();
    this.showResults = this.showResults.bind(this)
    this.showRecent = this.showRecent.bind(this)
    this.updateFormResults = this.updateFormResults.bind(this)
    this.showInstructions = this.showInstructions.bind(this)
    this.state = {
      output: 'Instructions',
      recent: 'search state woowoo',
      searchResults: 'this is what was searched',
      searchTerm: null,
      searchPage: 1
    }
  }

  showResults () {
    //Axios request for search results //
    if(this.state.searchTerm != null){
      var searchUrl = 'http://localhost:3002/api/search/' + this.state.searchTerm + '?offset=' + parseInt(this.state.searchPage)
      axios.get(searchUrl)
      .then(res => {
        console.log(res)
        this.setState({
        output: 'Results',
        searchResults: res
        })
      })
    } else {
      alert('please select a search term')
    }
  }

  updateFormResults (searchTerm, searchPage, e) {
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

  showInstructions(e) {
    e.preventDefault()
    this.setState({
      output: 'Instructions'
    })
  }

  render() {
    if(this.state.output == 'Results'){
      return (
        <div className="contentBox">
          <FormInstance updateFormResults = {this.updateFormResults} showResults = {this.showResults} />
          <h3 className="contentHeader"> Showing results for {this.state.searchResults} starting on page {this.state.searchPage}</h3>
          <NavbarInstance showRecent = {this.showRecent} showResults = {this.showResults} showInstructions = {this.showInstructions} />
          <Results searchResults={this.state.searchResults}/>
        </div>
      )
    } else if (this.state.output == 'Recent') {
      return (
        <div className="contentBox">
          <FormInstance updateFormResults = {this.updateFormResults} showResults = {this.showResults}/>
          <h3 className="contentHeader">Recent Searches</h3>
          <NavbarInstance showRecent = {this.showRecent} showResults = {this.showResults} showInstructions = {this.showInstructions}/>
          <Recent recent={this.state.recent}/>
        </div>
      )
    }else if (this.state.output == 'Instructions') {
      return (
        <div className="contentBox">
          <FormInstance updateFormResults = {this.updateFormResults} showResults = {this.showResults}/>
          <h3 className="contentHeader">How To Use The API</h3>
          <NavbarInstance showRecent = {this.showRecent} showResults = {this.showResults} showInstructions = {this.showInstructions}/>
          <Instructions />
        </div>
      )
    }
  }
}
