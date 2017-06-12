import React from 'react';
import {Form, FormControl, Button} from 'react-bootstrap'

export class FormInstance extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: 'empty search',
      numberOfResults: 0
    }
  }

  changeSearch() {
    this.setState({
      search: this.state.newSearch,
      numberOfResults: this.state.newNumberOfResults
    })
  }

  render() {
    return (
      <div>
      <Form inline={true} action = "/client" method = "POST">
        <FormControl
          className="searchTerm"
          placeholder='new search'
          type="text"
          name="search"
          onChange={event => this.setState({newSearch: event.target.value})}
          />
        <FormControl
          className="resultsPerPage"
          placeholder='results per page'
          type="text"
          name="resultsPerPage"
          onChange={event => this.setState({newNumberOfResults: event.target.value})}
          />
        <Button type= "submit" value="Submit" onClick = {() => this.changeSearch()} >
          submit
        </Button>
      </Form>

      <h3> Showing {this.state.numberOfResults} results for {this.state.search}</h3>
      </div>
    )
  }
}