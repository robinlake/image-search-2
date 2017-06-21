import React from 'react'
import {NavbarInstance} from './nav'
import {FormInstance} from './form'
import {Results} from './results'
import {Recent} from './recent'


export class Content extends React.Component {
  constructor(props) {
    super();
    this.showResults = this.showResults.bind(this)
    this.showRecent = this.showRecent.bind(this)
    this.state = {
      output: 'Results',
      recent: 'search state woowoo',
      search: 'this is what was searched'
    }
  }

  showResults (e) {
    e.preventDefault()
    this.setState({
      output: 'Results'
    })
  }

  showRecent (e) {
    e.preventDefault()
    this.setState({
      output: 'Recent'
    })

  }

  render() {


    if(this.state.output == 'Results'){
      return (
        <div className="contentBox">
          <FormInstance />
          <NavbarInstance showRecent = {this.showRecent} showResults = {this.showResults} />
          <Results search={this.state.search}/>
        </div>
      )
    } else {
      return (
        <div className="contentBox">
          <FormInstance />
          <NavbarInstance showRecent = {this.showRecent} showResults = {this.showResults} />
          <Recent recent={this.state.recent}/>
        </div>
      )
    }
  }
}
