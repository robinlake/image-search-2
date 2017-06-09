import React from 'react'
import {Nav} from './nav'
import {Form} from './form'


export class Content extends React.Component {
  render() {
    return (
      <div className="contentBox">
        <Form />
      </div>
    )
  }
}

