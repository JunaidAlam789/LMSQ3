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

  export const cloudtrailer={
    title: 'CloudTrailer',
    name: 'cloudtrailer',
    type: 'document',
   
    fields: [
      {title: 'Title', name: 'title', type: 'string'},
      {
        title: 'Video',
        name: 'video',
        type: 'cloudinary.asset',
      },
      
    ],
  }  