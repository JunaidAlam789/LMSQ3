// schemas/pet.js
export const video= {
    name: 'video',
    type: 'document',
      title: 'Video',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'video',
        type: 'cloudinary.asset',
        title: 'Video',
      },
      
      {
        name: "course",
        type: "reference",
        to: [{type: "course"}],
      }
    ]
  }