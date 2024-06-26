"use client"

import { useState } from "react";

export default function Home() {
const [name, setname] = useState("hi")
  
const toggle=()=>{
  setname((name)=>(name === "hi"? "hello": "hi"))
}

  return (
  <>
  <p>{name}</p>
 <button onClick={toggle}>toggle</button>

  </>
  );
}
