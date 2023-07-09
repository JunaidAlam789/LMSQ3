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
        title: 'Thumbnail',
        name: 'thumbnail',
        type: 'image',
      },
      {
        title: 'TimeStamp',
        name: 'timeStamp',
       type: 'array',
        of: [{type: 'document',
        fields: [
          {title: 'Title', name: 'title', type: 'string'},
          {
            title: 'minute',
            name: 'minute',
            type: 'number',
          },
        ],
      
      }],
      
      }, 
      {title: 'Index',
      name: 'index',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },


      {
        name: "course",
        type: "reference",
        to: [{type: "course"}],
      }
      
    ],
  }  