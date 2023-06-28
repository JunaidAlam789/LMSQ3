// schemas/pet.js
export const product= {
    name: 'product',
    type: 'document',
      title: 'Product',
    fields: [
      {
        name: 'product_id',
        type: 'string',
        title: 'Product_id'
      },
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
        name: 'image',
        type: 'image',
        title: 'Image',
      },
      {
        name: "price",
        type: "number",
        title: "Price",
      },
      {
        name: "priceDiscounted",
        type: "number",
        title: "Price Discounted",
      },
      {
        name: "category",
        type: "reference",
        to: [{type: "category"}],
      }
    ]
  }