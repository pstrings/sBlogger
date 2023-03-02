import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Blogger',

  projectId: '4iaqkl34',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool({
      defaultApiVersion: 'v2023-03-02',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
