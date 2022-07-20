import React from 'react'

const ParaContent = ({ show }) => {
  console.log('para component running');

  return (
    <div>
      { show && <p>This is react pratice</p>}
    </div>
  )
}

export default React.memo(ParaContent);