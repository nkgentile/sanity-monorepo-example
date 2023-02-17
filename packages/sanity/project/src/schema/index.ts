import type {SchemaTypeDefinition} from 'sanity'
import {project} from './project'
import {timeline} from './timeline'
import {milestone} from './milestone'
import {duration} from './duration'

export const types: SchemaTypeDefinition[] = [project, timeline, milestone, duration]

export * from './milestone'
export * from './project'
export * from './timeline'
export * from './duration'