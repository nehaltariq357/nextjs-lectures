import React from 'react'

const PropsTest = ({name,city}:{name:string,city:string}) => {

  return (
<>


<h1>{`name:${name}, city: ${city}`}</h1>

</>
  )
}

export default PropsTest