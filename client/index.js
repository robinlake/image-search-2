import React from 'react'
import ReactDOM from 'react-dom'
import {Header} from './components/header'
import {Footer} from './components/footer'
import {Content} from './components/content'


class App extends React.Component {
  render () {
    return (
        <div className="container">
            <div>
                <div>
                    <Header />
                </div>
            </div> 
            <div>
                <div>
                    <Content />
                </div>
            </div>
            <div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    )    
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

// module.exports = 'foobulous'