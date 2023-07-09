"use client"
import {client} from '../../sanity/lib/client'

import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });


export  default async function FileVideo(){

  //`*[_type == "product" && title match "women*"]
  let data=await client.fetch(`*[_type == "video"]{
    title,
    "videourl": video{asset->{url}},
    course->{category ->{title}, title},
  }`)
   let data2=await client.fetch(`*[_type == "course"]{
  "course":  title,
  "category":  category->title,
  "videosCount": count(*[_type=="video" && references(^._id)])
  }`) 
console.log(data[0])
//console.log(data2[0])
return(<>
<h1 className="text-2xl font-bold  text-center m-4"> React Player</h1>
<p className="text-2xl font-bold  text-center m-4">Cloudinary Assets</p>
 <div className="flex flex-wrap justify-center gap-4 ">{data.map((product:any,key: any)=>(
      <div key={key} className="flex flex-col justify-center items-center">
      <h3 className="text-lg font-bold uppercase " >{product.title}</h3>
      <h3 className="text-lg font-bold uppercase " >Category: {product.course.category.name}</h3>
      <h3 className="text-lg font-bold uppercase " >Course: {product.course.title}</h3>
      <h3 className="text-lg font-bold uppercase " >VideoCountURL:{data2[1].videosCount} </h3> 
       {/* data2[0].videosCount */}
      {/* <h3 className="text-lg font-bold uppercase " >{product.video.asset.playbackId}</h3> */}
      
      <ReactPlayer url={product.videourl.asset.url}
       controls={true} /> 
       </div>
      ))}</div>




</>
)

}