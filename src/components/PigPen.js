import React from "react"
import Pig from "./Pig.js"
import GalaxySNote7 from "./GalaxySNote7.js"

import exclaim from '../assets/exclaim.mp3';
import wreee from '../assets/wreee.mp3';
import exclamation from '../assets/exclamation.png';


const pigs = [
  "Sobriety",
  "Trouble",
  "Cherub",
  "MasterBlaster"
]

export default class PigPen extends React.Component {

  constructor() {
    super()
    this.state = { environment: "docile" }

    this.squeelAudio = new Audio(wreee);
    
    this.exclaimAudio = new Audio(exclaim)
    this.exclaimAudio.addEventListener("ended", ()=> this.alterEnvironment('docile'), false)
  }

  alterEnvironment = (vibe) => {
    if (vibe === "inhospitable") {
      this.squeelAudio.play()
      this.exclaimAudio.play()
    }
    this.setState({ environment: vibe })
  }

  panic = (pig='') => <img id={pig === 'galaxy' ? "galaxy-exclamation" : ""} className="exclamation" src={exclamation} alt="" />

  generateSheeple = ()=> pigs.map((name, idx) => <Pig key={idx} id={name} name={name} panic={this.panic} environment={this.state.environment} />)

  render() {
    return(
      <div id="pig-pen">
        {this.generateSheeple()}
        <GalaxySNote7 panic={this.panic} environment={this.state.environment} alterEnvironment={this.alterEnvironment} />
      </div>
    )
  }
}
