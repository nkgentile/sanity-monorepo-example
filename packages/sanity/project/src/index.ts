import {definePlugin} from 'sanity'
import {types} from './schema'

export const projectSchema = definePlugin({
  name: '@example/project',
  schema: {
    types,
  },
})

export * from './schema'