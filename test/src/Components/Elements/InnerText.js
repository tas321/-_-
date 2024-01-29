import React from 'react';

const InnerText = (props) => {
  return (
    <div className='innertext'>
        <h2>{props.h2}</h2>
        <h3>{props.h3}</h3>
        <p className='innertext'>{props.p}</p>
    </div>
  )
}

export default InnerText;
