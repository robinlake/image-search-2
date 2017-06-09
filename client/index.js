import React from 'react'
import ReactDOM from 'react-dom'
import {Header} from './components/header'

class App extends React.Component {
  render () {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-10 col-xs-offset-4">
                    <h1>Hello turtles</h1>
                </div>
            </div>
        </div>
    )    
  }
}

ReactDOM.render(<App />, document.getElementById('app'))