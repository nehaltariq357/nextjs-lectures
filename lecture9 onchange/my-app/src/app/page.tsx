"use client"
import Image from "next/image";
import { useState } from "react";
export default function Home() {

  const [Inputvalue,setInputvalue] = useState("")
  return (
 <>
 <div>
  <h1>input</h1>
  <input type="text" placeholder="write here " value={Inputvalue} onChange={(e)=>setInputvalue(e.target.value)} />
 </div>


<h1>result</h1>
<p>{Inputvalue}</p>
 </>
  );
}
