import React from 'react'

import './Button.styles.scss';

const Button = ({ children, onClick }) => {
  console.log('button component running');

  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

export default React.memo(Button)
