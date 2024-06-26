import Link from 'next/link'
import React from 'react'

const Product =async () => {

  const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const res = await fetchData.json()
  console.log(res)
  return (
<>
<h1>Product</h1>
 
 <ol>
  {res.map((item:any,i:number)=>{
    return (
      <li>
        <Link href={`/product/${item.id}`}>{item.title}</Link>
      </li>
    )
  })}
 </ol>



</>
  )
}

export default Product