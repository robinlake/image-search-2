import React from 'react'
import ReactDOM from 'react-dom'
import {Header} from './components/header'
import {Footer} from './components/footer'
import {Content} from './components/content'


class App extends React.Component {
  render () {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-lg-8 col-lg-offset-2">
                    <Header />
                </div>
            </div> 
            <div className="row">
                <div className="col-xs-12 col-lg-8 col-lg-offset-2">
                    <Content />
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-lg-8 col-lg-offset-2">
                    <Footer />
                </div>
            </div>
        </div>
    )    
  }
}

ReactDOM.render(<App />, document.getElementById('app'))