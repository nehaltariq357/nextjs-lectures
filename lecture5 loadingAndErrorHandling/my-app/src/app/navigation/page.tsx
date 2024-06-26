import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
<>
<h1>Navigation</h1>

<ol>
  <li><Link href="/">Home</Link></li>
  <li><Link href="/about">About</Link></li>
  <li><Link href="/product">Product</Link></li>
</ol>



</>




  )
}

export default Navigation