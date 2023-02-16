import {defineCliConfig} from 'sanity/cli'
import {default as config} from '@workspace/sanity'
const {projectId, dataset} = config;

export default defineCliConfig({
  api: {
    projectId,
    dataset
  }
})
