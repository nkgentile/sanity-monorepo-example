import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {project, projectSchema} from '@example/project'
import {productionUrl} from '@example/production-url'
import {previewDocumentNode} from '@example/preview-pane'

import {schemaTypes} from './schemas'

const projectId = 'odh6ii6d'
const dataset = 'production'
const apiVersion = '2023-02-16'

// This is the document id used for the preview secret that's stored in your dataset.
// The secret protects against unauthorized access to your draft content and have a lifetime of 60 minutes, to protect against bruteforcing.
export const previewSecretId: `${string}.${string}` = 'preview.secret'

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [
  project.name,
]

export default defineConfig({
  name: 'default',
  title: 'Monorepo Example',

  projectId,
  dataset,

  plugins: [
    deskTool({
      defaultDocumentNode: previewDocumentNode({
        apiVersion,
        previewSecretId,
        previewableDocumentTypes: PREVIEWABLE_DOCUMENT_TYPES
      }),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    projectSchema(),
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEWABLE_DOCUMENT_TYPES,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
