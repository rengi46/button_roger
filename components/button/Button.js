import React from 'react'
import check from "../../assets/icons/checkSVG.svg"
import error from "../../assets/icons/closeSVG.svg"
import arrow from "../../assets/icons/arrowSVG.svg"



export const Button = ({onClick,status="Submit"}) => {
  let style = "button"
  let image
  let conten

  switch(status){
    case "Succes":
      conten = "Succes "
      image = check.src
      style = style + " succes"
      break;
    case "Error":
      conten = "Error "
      image = error.src
      style = style + " error"
      break;
    case "Loading":
      conten = "Submit "
      image = arrow.src
      style = style + " active"
      break;
    case "Submit":
      conten = "Submit "
      image = arrow.src
      break;
  }

  return (
    <button className={style}  onClick={onClick}>
      <span>
        {conten}
        <img  height={23} src={image}/>
      </span>
    </button>
  )
}


