/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {muxInput} from 'sanity-plugin-mux-input'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
//import {muxInput} from '../onlinelms/sanity'
import {cloudinaryAssetSourcePlugin} from 'sanity-plugin-cloudinary'
import {cloudinarySchemaPlugin} from 'sanity-plugin-cloudinary'


export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    muxInput({mp4_support: 'standard'}),
    //muxInput(),
    cloudinaryAssetSourcePlugin(),
    cloudinarySchemaPlugin(),
  ],
  schema,
})
