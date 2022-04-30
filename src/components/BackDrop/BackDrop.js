import React from 'react'

import './BackDrop.css'

const backDrop = props => (
    <div className='backdrop' onClick={props.click} />
);

// const backDrop = (props) => <div className='backdrop' onClick={props.click} />

export default backDrop;