"use client"
import MuxPlayer from '@mux/mux-player-react';

export default function MuxVideo(){

return(<>
<h1 className="text-2xl font-bold  text-center m-4"> Mux video Player</h1>
<p className="text-2xl font-bold  text-center m-4">Test Asset Only for 24hrs</p>
<MuxPlayer
  streamType="on-demand"
  playbackId="j3g7ZRm4lYPXoN00G02HJc5BOhdDb1rBViBXf3b02hquKM"
  metadataVideoTitle="Mux Test Video"
  metadataViewerUserId="mux user_id"
  primaryColor="#FFFFFF"
  secondaryColor="#000000"
/>
</>
)

}