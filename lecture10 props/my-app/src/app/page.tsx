import Image from "next/image";
import PropsTest from "./component/propsTest";
export default function Home() {
  return (
<>
<h1>props</h1>
<PropsTest name="nehal" city="karachi"/>
<PropsTest name="ali" city="peshawer"/>
<PropsTest name="hamza" city="kpk"/>
<PropsTest name="haris" city="karachi"/>

</>
  );
}
