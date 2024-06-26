"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Home() {
 
 const [count, setcount] = useState(0)

useEffect(() => {

console.log("useEffect fire")

}, []) // this useEffect execute one time , when page refresh

useEffect(() => {

  console.log("useEffect fire2")
  
  }, [count]) // this useEffect execute, when some changes in count 


  return (
<>
<p>{count}</p>
<button onClick={()=>setcount(count +1)}>increment</button>
<button onClick={()=>setcount(count -1)}>decrement</button>
</>
  );
}
