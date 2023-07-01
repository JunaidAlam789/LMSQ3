"use client"
import {client} from '../../sanity/lib/client'
import MuxPlayer from '@mux/mux-player-react';
import VideoPlayer from './VideoPlayer';

export  default async function MuxVideo(){
  let search= "Women"
  //`*[_type == "product" && title match "women*"]
  let data=await client.fetch(`*[_type == "trailer"]
  {title,
  video{asset->{playbackId}},
   }`)
console.log(data[0])
return(<>
<h1 className="text-2xl font-bold  text-center m-4"> Mux video Player</h1>
<p className="text-2xl font-bold  text-center m-4">Test Asset Only for 24hrs</p>
 <div className="flex flex-wrap justify-center gap-4 ">{data.map((product:any,key: any)=>(
      <div key={key} className="flex flex-col justify-center items-center">
      <h3 className="text-lg font-bold uppercase " >{product.title}</h3>
      {/* <h3 className="text-lg font-bold uppercase " >{product.video.asset.playbackId}</h3> */}
      <MuxPlayer
  streamType="on-demand"
  //playbackId="j3g7ZRm4lYPXoN00G02HJc5BOhdDb1rBViBXf3b02hquKM"
   playbackId={product.video.asset.playbackId}
  metadataVideoTitle="Mux Test Video"
  metadataViewerUserId="mux user_id"
  primaryColor="#FFFFFF"
  secondaryColor="#000000"
/>
      
       </div>
      ))}</div>


{/* <MuxPlayer
  streamType="on-demand"
  //playbackId="j3g7ZRm4lYPXoN00G02HJc5BOhdDb1rBViBXf3b02hquKM"
   playbackId={data[1].video.asset.playbackId}
  metadataVideoTitle="Mux Test Video"
  metadataViewerUserId="mux user_id"
  primaryColor="#FFFFFF"
  secondaryColor="#000000"
/> */}

</>
)

}