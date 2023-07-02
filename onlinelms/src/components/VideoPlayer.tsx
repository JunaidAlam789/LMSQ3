"use client"
//import React from 'react'
//import ReactPlayer from 'react-player'
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

  
export default function VideoPlayer(){
  return (<>
    <div>
      <h2>NextJs VideoPlayer - GeeksforGeeks</h2>
      <ReactPlayer url='https://www.youtube.com/watch?v=wWgIAphfn2U' />
    </div>

<div>
<h2>Sanity file type Schema</h2>
<ReactPlayer url='https://cdn.sanity.io/files/2fxx4d6o/lectures/40eac18c9411459966b6bea20d86eec2e785e35e.mp4' controls={true} />

</div>

</>

  )
}