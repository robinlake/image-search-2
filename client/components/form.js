import React from 'react'
import ReactDOM from 'react-dom'
import {Form, FormControl, Button} from 'react-bootstrap'

export class FormInstance extends React.Component {
  constructor(props) {
    super(props)
    this.add = this.add.bind(this)
    this.state = {
      search: 'empty search',
      numberOfResults: 0
    }
  }

  add(event){
    if(event.keyCode == 13){
     (() => {this.props.updateFormResults(this.state.search,parseInt(this.state.numberOfResults))})();
     (()=> {this.props.showResults()})();
     console.log(this.props.showResults)
    }
  }

  componentDidMount(){
    window.addEventListener('keyup', this.add)
  }

  render() {
    return (
      <div>
        <Form> {/*onSubmit = {this.handleSubmit}>*/}
          <FormControl
            className="searchTerm"
            placeholder='new search'
            type="text"
            name="search"
            onChange={event => this.setState({search: event.target.value})}
            />
          <FormControl
            className="resultsPerPage"
            placeholder='results per page'
            type="text"
            name="numberOfResults"
            onChange={event => this.setState({numberOfResults: event.target.value})}
            />
          <Button id="submitButton" value="Submit" onClick = {() => this.props.updateFormResults(this.state.search,parseInt(this.state.numberOfResults))} >
            submit
          </Button>
        </Form>
      </div>
    )
  }
}