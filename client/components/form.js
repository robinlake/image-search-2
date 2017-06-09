import React from 'react';
import {Form, FormControl, Button} from 'react-bootstrap'

export class FormInstance extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: 'empty search'
    }
  }

  changeSearch() {
    this.setState({search: this.state.newSearch})
  }

  render() {
    return (
      <div>
      <Form inline={true}>
        <FormControl
          className="searchTerm"
          placeholder='new search'
          onChange={event => this.setState({newSearch: event.target.value})}
          />
        <FormControl
          className="resultsPerPage"
          placeholder='results per page'
          />
        <Button onClick = {() => this.changeSearch()} >
          submit
        </Button>
      </Form>

      <h3> Searches for {this.state.search}</h3>
      </div>
    )
  }
}