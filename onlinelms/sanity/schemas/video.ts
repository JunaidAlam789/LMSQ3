const cloudVideo = {
    name: 'cloudvideo',
    type: 'cloudinary.asset',
    title: 'Video asset reference',
    fields: [
      {
        title: 'CloudinarlyVideo',
        name: 'asset',
        type: 'object',
       
        
      },
    ],
  } 

  export const video={
    title: 'Video',
    name: 'video',
    type: 'document',
   
    fields: [
      {title: 'Title', name: 'title', type: 'string'},
      {
        title: 'Video',
        name: 'video',
        type: 'file',
      },
      {
        title: 'TimeStamp',
        name: 'timeStamp',
        type: 'datetime',
      },
      
    ],
  }  