// src/sanity.js
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 't3wmz8oi', // Substitui pelo teu ID do projeto Sanity!
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2023-05-03', // Data da API
})

const builder = imageUrlBuilder(client)

// Função para extrair a URL das imagens do Sanity
export const urlFor = (source) => builder.image(source)