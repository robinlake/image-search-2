import React from 'react'
import {NavbarInstance} from './nav'
import {FormInstance} from './form'


export class Content extends React.Component {
  render() {
    return (
      <div className="contentBox">
        <FormInstance />
        <NavbarInstance />
      </div>
    )
  }
}

