import React from "react"

const GalaxySNote7 = function(props){
  return(
    <div id="galaxy-s-note" onClick={ (e)=> props.alterEnvironment('inhospitable') }>
      { props.environment === 'inhospitable' ? props.panic('galaxy') : null }
    </div>
  )
}

export default GalaxySNote7
