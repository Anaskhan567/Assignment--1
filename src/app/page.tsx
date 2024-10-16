import Image from "next/image";
import link from "next/link"
export default function Home() {
  return (
   <div>
    <ul className=" bg-yellow-500">
    <h1><li><a href="/home">Home</a></li></h1>
   <h1><li><a href ="/about">About</a></li></h1>
   <h1><li><a href ="/service">Service</a></li></h1>
   <h1><li><a href ="/contact">Contact</a></li></h1>
   </ul>
   </div>



  )
};