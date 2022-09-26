
import { randomBool } from '../services/services'
import { Button } from '../components/button/Button'
import React from 'react';

export default function Home() {

  const [state,setState] = React.useState("Submit")

  const handelClick = () => {
    setState("Loading")
    randomBool()
      .then((res)=>{
        if(res){
          setState("Succes")
        }
        else{
          setState("Error")
        }
      })

  }
  return (
    <div>
      <Button status={state}  onClick={handelClick}/>
    </div>
  )
}
