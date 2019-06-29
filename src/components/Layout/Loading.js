import React from 'react'
import { Spinner } from "react-bootstrap";

export default () =>
  <div className='loading-wrapper fadein-slow'>
    <div className='loading'>
      <Spinner animation="grow" variant="dark" style={styleSpinner}></Spinner>
    </div>
  </div>

const styleSpinner = {
    width: '200px',
    height: '200px'
}