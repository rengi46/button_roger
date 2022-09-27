
const randomBool = async () => {
  return new Promise((res,req)=>{
    setTimeout(
      ()=>{
        res(Boolean(Math.round(Math.random())))
      },
      1000
    )
  })
}

export default randomBool