// schemas/pet.js
export const course= {
    name: 'course',
    type: 'document',
      title: 'Course',
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
        name: "category",
        type: "reference",
        to: [{type: "category"}],
      }
    ]
  }