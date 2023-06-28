// schemas/pet.js
export const promotion= {
    name: 'promotion',
    type: 'document',
      title: 'Promotion',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
       },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image'
      },
      {
        name: 'price',
        type: 'string',
        title: 'Price'
      },
      {
        name: 'discountedprice',
        type: 'string',
        title: 'DiscountedPrice'
      },

    ]
  }