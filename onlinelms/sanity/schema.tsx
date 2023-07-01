import { type SchemaTypeDefinition } from 'sanity'

//import {category} from "./schemas/category"
//import {product} from "./schemas/product"
//import {mux} from "./schemas/mux"
//import {muxVideo} from "./schemas/muxVideo"
//import { muxVideoAsset } from './schemas/muxVideoAsset'
// This is from schema.ts
//import {muxInput} from 'sanity-plugin-mux-input'

 export const muxVideo = {
  name: 'mux.video',
  type: 'object',
  title: 'Video asset reference',
  fields: [
    {
      title: 'Video',
      name: 'asset',
      type: 'reference',
      weak: true,
      to: [{type: 'mux.videoAsset'}],
    },
  ],
} 

 export const muxVideoAsset = {
  name: 'mux.videoAsset',
  type: 'object',
  title: 'Video asset',
  fields: [
    {
      type: 'string',
      name: 'status',
    },
    {
      type: 'string',
      name: 'assetId',
    },
    {
      type: 'string',
      name: 'playbackId',
    },
    {
      type: 'string',
      name: 'filename',
    },
    {
      type: 'number',
      name: 'thumbTime',
    },
  ],
}
 


  export const trailer={
      title: 'Trailer',
      name: 'trailer',
      type: 'document',
     
      fields: [
        {title: 'Title', name: 'title', type: 'string'},
        {
          title: 'Video',
          name: 'video',
          type: 'mux.video',
        },
        
      ],
    }  
    /* export const catVideos={
      title: 'catVideos',
      name: 'catVideos',
      type: 'document',
      fields: [
        {title: 'Title', name: 'title', type: 'string'},
        {
          title: 'Video',
          name: 'video',
          type: 'mux.video',
        },
      ],
    }
 */
    
  

 
 export const schema: { types: SchemaTypeDefinition[] } = {
  types: [trailer]
}
  