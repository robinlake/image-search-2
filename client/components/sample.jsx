var React = require('react')

module.exports = React.createClass({
  render: function(){
    return(
      <div>
        <h1>This is the sample component</h1>
        <h2>{this.props.title}</h2>
      </div>
    )
  }
})