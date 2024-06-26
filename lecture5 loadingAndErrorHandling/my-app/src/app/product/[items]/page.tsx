import React from 'react'

const Items =async ({params}:{params:{items:string}}) => { 
  const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.items}`)
  const res = await fetchData.json()
  console.log(res)
  return (
    <><h1>Items</h1>
    <p>id: {res.id}</p>
    <p>title: {res.title}</p>
    <p>body: {res.body}</p>
    
    
    
    </>
  )
}

export default Items