import React from "react"

const Pig = function(props) {
  return(
    <div id={props.name} className="sheeple">
      { props.environment === 'inhospitable' ? props.panic() : null }
    </div>
  )
}

export default Pig
