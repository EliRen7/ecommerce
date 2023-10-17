import { createClient } from 'next-sanity'


import { apiVersion, dataset, projectId, useCdn, token } from '../env'

export const client = createClient({
  apiVersion: apiVersion,
  dataset: dataset,
  projectId: projectId,
  useCdn: useCdn,
  token: token
})

