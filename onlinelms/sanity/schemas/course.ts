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
        name: 'whatCanYouDo',
        type: 'string',
        title: 'What Can You Do',
        description: 'After completion of course what can you be able to do',
      },
      {
        name: 'card1',
        type: 'document',
        title: 'Card1',
        fields: [
          {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: ''
    
          },
          {
            name: 'description',
            type: 'string',
            title: 'Description',
            description: ''
    
          }

        ]

      },
      {
        name: 'card2',
        type: 'document',
        title: 'Card2',
        description: '',
        fields: [
          {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: ''
    
          },
          {
            name: 'description',
            type: 'string',
            title: 'Description',
            description: ''
    
          }

        ]

      },

      {
        name: 'card3',
        type: 'document',
        title: 'Card3',
        description: 'this is card3',
        fields: [
          {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: ''
    
          },
          {
            name: 'description',
            type: 'string',
            title: 'Description',
            description: ''
    
          }

        ]

      },
      {
        name: 'card4',
        type: 'document',
        title: 'Card4',
        description: 'this is card4',
        fields: [
          {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: ''
    
          },
          {
            name: 'description',
            type: 'string',
            title: 'Description',
            description: ''
    
          }

        ]

      },
      {
        name: 'isCompletePath',
        type: 'boolean',
        title: 'isCompletePath',
        description: 'Further Study'

      },
      {
        name: 'introVideo',
        type: 'video',
        title: 'introVideo',
        description: ''

      },

              
      {
        name: "category",
        type: "reference",
        to: [{type: "category"}],
      }
    ]
  }