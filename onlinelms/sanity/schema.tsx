import { type SchemaTypeDefinition } from 'sanity'
import { video } from './schemas/video'
import {course} from './schemas/course'
import { category } from './schemas/category'

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
    export const videofile={
      title: 'Video File',
      name: 'videofile',
      type: 'document',
     
      fields: [
        {title: 'Title', name: 'title', type: 'string'},
        {
          title: 'Video',
          name: 'video',
          type: 'file',
        },
        
      ],
    }  
    export const cloudVideo = {
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

   /*  export const category= {
      name: "category",
      type: "document",
      title: "Course Category",
      fields: [{
             name: "name",
             type: "string",
             title: "Course Category"
          }]
      
      
      } */
    

    /* export const course= {
      name: 'course',
      type: 'document',
        title: 'Course',
      fields: [
        {
          name: 'course_id',
          type: 'string',
          title: 'Course_id'
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
          name: "category",
          type: "reference",
          to: [{type: "category"}],
        }
      ]
    } */
   /*  export const video= {
      name: 'video',
      type: 'document',
        title: 'Video',
      fields: [
        {
          name: 'video_id',
          type: 'string',
          title: 'Video_id'
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
    } */

   
    
  

 
 export const schema: { types: SchemaTypeDefinition[] } = {
 /*  types: [trailer, videofile,cloudtrailer,category,course,video] */
  types: [category,course,video]
}
  