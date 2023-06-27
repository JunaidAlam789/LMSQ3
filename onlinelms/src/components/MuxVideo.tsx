"use client"
import MuxPlayer from '@mux/mux-player-react';

export default function MuxVideo(){

return(<>
<h1 className="text-2xl font-bold  text-center m-4"> Mux video Player</h1>
<MuxPlayer
  streamType="on-demand"
  playbackId="UR00q6qdtgutDbCDdGgQOXanXbz9VRBwf9PLYJHEa00yo"
  metadataVideoTitle="Placeholder (optional)"
  metadataViewerUserId="Placeholder (optional)"
  primaryColor="#FFFFFF"
  secondaryColor="#000000"
/>
</>
)

}