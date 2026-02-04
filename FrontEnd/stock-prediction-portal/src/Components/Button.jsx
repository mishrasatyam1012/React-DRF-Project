import React from 'react'

const Button = ({type, value}) => {
  return (
    <>
    <button className={`btn btn-${type}`}>
        {value}
    </button>
    </>
  )
}

export default Button