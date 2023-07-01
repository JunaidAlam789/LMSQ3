"use client"
//import React from 'react'
//import ReactPlayer from 'react-player'
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

  
export default function VideoPlayer(){
  return (
    <div>
      <h2>NextJs VideoPlayer - GeeksforGeeks</h2>
      <ReactPlayer url='https://www.youtube.com/watch?v=wWgIAphfn2U' />
    </div>
  )
}