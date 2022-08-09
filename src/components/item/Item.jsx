import { useState } from "react";
import "./Item.css";



const Item = ({card}) => {
  const handleClick = () => {
    setShowLogo(!showLogo)
  }
  const {name, img, options} = card;
  const [showLogo, setShowLogo] = useState(true)
  return (
    <div className="card" onClick={handleClick}>
      {
        showLogo ? (<div>
          <img className="card-logo" src={img} alt="item" />
        <h3 className="card-title">{name}</h3>
        </div>) : 
        <ul className="list">
        {
          options.map((element, index)=> {
            return <li key={index}>{element}</li>;
          })
        }
      </ul>
      }
      
      
      
    </div>
  )
}

export default Item