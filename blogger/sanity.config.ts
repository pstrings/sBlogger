import {defineConfig, isDev} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const devOnlyPlugins = [visionTool()]

export default defineConfig({
  name: 'default',
  title: 'Blogger',

  projectId: '4iaqkl34',
  dataset: 'production',

  plugins: [deskTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})
