"use client"
import {client} from '../../sanity/lib/client'

import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });


export  default async function CloudinaryVideo(){

  //`*[_type == "product" && title match "women*"]
  let data=await client.fetch(`*[_type == "cloudtrailer"]{
    title,
    video{url},
  }`)
console.log(data[0])
return(<>
<h1 className="text-2xl font-bold  text-center m-4"> React Player</h1>
<p className="text-2xl font-bold  text-center m-4">Cloudinary Assets</p>
 <div className="flex flex-wrap justify-center gap-4 ">{data.map((product:any,key: any)=>(
      <div key={key} className="flex flex-col justify-center items-center">
      <h3 className="text-lg font-bold uppercase " >{product.title}</h3>
      {/* <h3 className="text-lg font-bold uppercase " >{product.video.asset.playbackId}</h3> */}
      
      <ReactPlayer url={product.video.url} controls={true} />
       </div>
      ))}</div>




</>
)

}